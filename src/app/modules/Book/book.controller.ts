import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import successResponse from '../../utils/successRespon';
import { bookService } from './book.services';

const createBook = catchAsync(async (req, res) => {
  const data = await bookService.createBook(req.body);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created successfully!',
    data,
  });
});

const RetrieveAllBooks = catchAsync(async (req, res) => {
  const data = await bookService.RetrieveAllBooks();

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieve All books successfully!',
    data,
  });
});

const RetrieveBookById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await bookService.RetrieveBookById(id);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieve book successfully!',
    data,
  });
});

const UpdateBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await bookService.UpdateBook(id, req.body);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated book successfully!',
    data,
  });
});

const DeleteBook = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await bookService.DeleteBook(id);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated book successfully!',
    data,
  });
});

export const bookController = {
  createBook,
  RetrieveAllBooks,
  RetrieveBookById,
  UpdateBook,
  DeleteBook,
};
