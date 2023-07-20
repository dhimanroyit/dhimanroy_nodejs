import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { MongoError, MongoServerError } from 'mongodb';

@Catch()
export class MongoExceptionsFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status: number;
    let message: string;
    console.log(exception instanceof MongoServerError);

    if (exception.code === 11000) {
      status = HttpStatus.CONFLICT;
      message = 'conflict data';
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'internal server error';
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      error: exception.message,
    });
  }
}
