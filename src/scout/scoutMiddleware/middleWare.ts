import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class idValidationMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware run successful');
    try {
      const id = req.params.id;
      if (!id) {
        throw new BadRequestException('Id not provided');
      }
      next();
    } catch (error) {
      // Handle the error and respond with an appropriate error message
      res.status(error.getStatus()).json({
        statusCode: error.getStatus(),
        message: error.message,
      });
    }
  }
}

// proper format
