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

// const RetrieveAllBorrowRecords = catchAsync(async (req, res) => {
//   const data = await borrowRecordService.RetrieveAllBorrowRecords();

//   successResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Retrieve All borrowRecords successfully!',
//     data,
//   });
// });

// const RetrieveBorrowRecordById = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const data = await borrowRecordService.RetrieveBorrowRecordById(id);

//   successResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Retrieve borrowRecord successfully!',
//     data,
//   });
// });

// const UpdateBorrowRecord = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const data = await borrowRecordService.UpdateBorrowRecord(id, req.body);

//   successResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Updated borrowRecord successfully!',
//     data,
//   });
// });

// const DeleteBorrowRecord = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const data = await borrowRecordService.DeleteBorrowRecord(id);

//   successResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Updated borrowRecord successfully!',
//     data,
//   });
// });

const returnBorrowBook = catchAsync(async (req, res) => {
  await borrowRecordService.returnBorrowBook(req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Book returned successfully',
  });
});

const overdueBooks = catchAsync(async (req, res) => {
  const data: any = await borrowRecordService.overdueBooks();

  if (data?.length > 0) {
    successResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Overdue borrow list fetched',
      data,
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
  // RetrieveAllBorrowRecords,
  // RetrieveBorrowRecordById,
  // UpdateBorrowRecord,
  // DeleteBorrowRecord,
  returnBorrowBook,
  overdueBooks,
};
