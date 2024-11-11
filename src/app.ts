/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/route';
import cookieParser from 'cookie-parser';
import globalErrorhandler from './app/middleware/globalErrorhandler';
import notFoundErrorHandler from './app/middleware/notFound';
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
app.use(globalErrorhandler);

// notfound route handler
app.use(notFoundErrorHandler);

export default app;
