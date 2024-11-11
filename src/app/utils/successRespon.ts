import { Response } from 'express';

type Data<T> = {
  status: number;
  success: boolean;
  message: string;
  data: T;
};

const successResponse = <T>(res: Response, data: Data<T>) => {
  return res.status(data?.status).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
  });
};

export default successResponse;
