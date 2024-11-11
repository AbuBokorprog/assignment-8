import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from './catchAsync';

const requestValidation = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    schema.parseAsync(req.body);

    next();
  });
};

export default requestValidation;
