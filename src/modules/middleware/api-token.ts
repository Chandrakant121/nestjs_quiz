import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] != 'api-token') {
      // throw new BadRequestException('The token does not match')
      // OR
      // throw new HttpException('My response', HttpStatus.PAYMENT_REQUIRED)
      // OR Custom exception
      throw new ForbiddenException()
    }
    next();
  }
}