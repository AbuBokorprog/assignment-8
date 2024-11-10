import express from 'express';
import requestValidation from '../../utils/validationSchema';
import {
  createBorrowRecordSchema,
  updateBorrowRecordSchema,
} from './borrowRecord.validation';
import { borrowRecordController } from './borrowRecord.controller';
const router = express.Router();

router.post(
  '/',
  requestValidation(createBorrowRecordSchema),
  borrowRecordController.createBorrowRecord,
);
router.get('/', borrowRecordController.RetrieveAllBorrowRecords);
router.get('/:id', borrowRecordController.RetrieveBorrowRecordById);
router.patch(
  '/:id',
  requestValidation(updateBorrowRecordSchema),
  borrowRecordController.UpdateBorrowRecord,
);
router.delete('/:id', borrowRecordController.DeleteBorrowRecord);

export const borrowRecordRouter = router;
