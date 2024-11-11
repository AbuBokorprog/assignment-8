import express from 'express';
import { returnBookController } from './returnBook.controller';
const router = express.Router();

router.patch('/return', returnBookController.returnBorrowBook);

export const returnRouter = router;
