import express from 'express';
import { bookController } from './book.controller';
import requestValidation from '../../utils/requestValidation';
import { createBookSchema, updateBookSchema } from './book.validation';
const router = express.Router();

// create book router
router.post(
  '/',
  requestValidation(createBookSchema),
  bookController.createBook,
);

// Retrieve all books router
router.get('/', bookController.RetrieveAllBooks);

// Retrieve book by id router
router.get('/:bookId', bookController.RetrieveBookById);

// Update book router
router.patch(
  '/:bookId',
  requestValidation(updateBookSchema),
  bookController.UpdateBook,
);

// Delete book router
router.delete('/:bookId', bookController.DeleteBook);

export const bookRouter = router;
