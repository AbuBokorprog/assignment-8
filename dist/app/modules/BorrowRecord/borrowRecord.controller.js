"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const successRespon_1 = __importDefault(require("../../utils/successRespon"));
const borrowRecord_services_1 = require("./borrowRecord.services");
const createBorrowRecord = (0, catchAsync_1.default)(async (req, res) => {
    const data = await borrowRecord_services_1.borrowRecordService.createBorrowRecord(req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
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
const returnBorrowBook = (0, catchAsync_1.default)(async (req, res) => {
    await borrowRecord_services_1.borrowRecordService.returnBorrowBook(req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Book returned successfully',
    });
});
exports.borrowRecordController = {
    createBorrowRecord,
    // RetrieveAllBorrowRecords,
    // RetrieveBorrowRecordById,
    // UpdateBorrowRecord,
    // DeleteBorrowRecord,
    returnBorrowBook,
};
