/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import successResponse from '../../utils/successRespon';
import { borrowRecordService } from './borrowRecord.services';

const createBorrowRecord = catchAsync(async (req, res) => {
  const data = await borrowRecordService.createBorrowRecord(req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book borrowed successfully',
    data,
  });
});

const overdueBooks = catchAsync(async (req, res) => {
  const data: any = await borrowRecordService.overdueBooks();

  if (data?.length > 0) {
    successResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Overdue borrow list fetched',
      data: data,
    });
  } else {
    successResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'No overdue books',
      data,
    });
  }
});

export const borrowRecordController = {
  createBorrowRecord,
  overdueBooks,
};
