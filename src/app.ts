/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/route';
import cookieParser from 'cookie-parser';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Project setup home page');
});

// global error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = 500;
  const message = err.message || 'Something went wrong!';

  return res.status(status).json({
    success: false,
    message: message,
    error: err,
  });
});

// notfound route handler
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({
    success: false,
    message: 'API not found',
    error: '',
  });
});

export default app;
