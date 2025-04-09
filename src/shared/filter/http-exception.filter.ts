import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as moment from 'moment';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      status !== HttpStatus.INTERNAL_SERVER_ERROR
        ? JSON.stringify(exception.getResponse()) || null
        : 'INTERNAL_SERVER_ERROR';

    // const status =
    //   exception instanceof HttpException
    //     ? exception.getStatus()
    //     : HttpStatus.INTERNAL_SERVER_ERROR;

    // const exceptionResponse = (exception?.getResponse() as any) || {
    //   message: 'Some errors happen. Check your server',
    // };

    // const exceptionMessage =
    //   exception.message === 'Bad Request Exception'
    //     ? exceptionResponse?.message
    //     : exception.message;

    // const message = exceptionMessage;

    const errorResponse = {
      method: request.method,
      path: request.url,
      statusCode: status,
      message: message,
      timestamp: moment().format(),
    };

    return response.status(status).json(errorResponse);
  }
}
