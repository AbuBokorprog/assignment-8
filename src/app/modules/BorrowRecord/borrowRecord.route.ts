import express from 'express';
import requestValidation from '../../utils/requestValidation';
import { createBorrowRecordSchema } from './borrowRecord.validation';
import { borrowRecordController } from './borrowRecord.controller';
const router = express.Router();

router.post(
  '/',
  requestValidation(createBorrowRecordSchema),
  borrowRecordController.createBorrowRecord,
);

router.get('/overdue', borrowRecordController.overdueBooks);

export const borrowRecordRouter = router;
