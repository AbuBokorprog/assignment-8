import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import successResponse from '../../utils/successRespon';
import { returnService } from './returnBook.service';

const returnBorrowBook = catchAsync(async (req, res) => {
  await returnService.returnBorrowBook(req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book returned successfully',
  });
});

export const returnBookController = {
  returnBorrowBook,
};
