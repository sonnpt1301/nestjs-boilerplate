import { ApiProperty } from '@nestjs/swagger';
import { DefaultPagination } from 'src/shared/constants/common.constant';
import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CommonPaginationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ default: DefaultPagination.PAGE })
  @IsNotEmpty()
  @IsNumberString()
  page: string;

  @ApiProperty({ default: DefaultPagination.PAGE_SIZE })
  @IsNotEmpty()
  @IsNumberString()
  pageSize: string;
}
