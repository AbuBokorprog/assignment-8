import express from 'express';
import { bookController } from './book.controller';
import requestValidation from '../../utils/validationSchema';
import { createBookSchema, updateBookSchema } from './book.validation';
const router = express.Router();

router.post(
  '/',
  requestValidation(createBookSchema),
  bookController.createBook,
);
router.get('/', bookController.RetrieveAllBooks);
router.get('/:id', bookController.RetrieveBookById);
router.patch(
  '/:id',
  requestValidation(updateBookSchema),
  bookController.UpdateBook,
);
router.delete('/:id', bookController.DeleteBook);

export const bookRouter = router;
