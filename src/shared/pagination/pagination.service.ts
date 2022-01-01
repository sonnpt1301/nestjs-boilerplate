import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SelectQueryBuilder } from 'typeorm';
import { commonRadix } from '../contants/common.contants';
import { CommonPaginationDto } from './dto/pagination.dto';

@Injectable()
export class PaginationService {
  public async commonPagination<T>(
    commonPaginationDto: CommonPaginationDto,
    query: SelectQueryBuilder<T>,
  ) {
    const page = parseInt(commonPaginationDto.page, commonRadix) - 1;
    const pageSize = parseInt(commonPaginationDto.pageSize, commonRadix);
    if (page < 0 || pageSize < 1) {
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }
    const [result, totalCount] = await query
      .skip(page * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return {
      data: result,
      currentPage: page + 1,
      pageSize,
      totalPage: Math.ceil(totalCount / pageSize),
      totalCount,
    };
  }
}
