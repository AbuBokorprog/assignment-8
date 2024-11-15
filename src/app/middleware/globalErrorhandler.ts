/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import config from '../config';

const globalErrorhandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = 500;
  const message = err.message || 'Something went wrong!';

  return res.status(status).json({
    success: false,
    status: status,
    message: message,
    error: config.node_env === 'development' ? err : message,
  });
};

export default globalErrorhandler;
