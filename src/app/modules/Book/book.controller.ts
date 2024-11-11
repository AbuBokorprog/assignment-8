import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import successResponse from '../../utils/successRespon';
import { bookService } from './book.services';

// create book controller
const createBook = catchAsync(async (req, res) => {
  const data = await bookService.createBook(req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data,
  });
});

// Retrieve all books
const RetrieveAllBooks = catchAsync(async (req, res) => {
  const data = await bookService.RetrieveAllBooks();

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data,
  });
});

// Retrieve book by id
const RetrieveBookById = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const data = await bookService.RetrieveBookById(bookId);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data,
  });
});

// Update book controller
const UpdateBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const data = await bookService.UpdateBook(bookId, req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data,
  });
});

// Delete book controller
const DeleteBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  await bookService.DeleteBook(bookId);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book successfully deleted',
    // data,
  });
});

export const bookController = {
  createBook,
  RetrieveAllBooks,
  RetrieveBookById,
  UpdateBook,
  DeleteBook,
};
