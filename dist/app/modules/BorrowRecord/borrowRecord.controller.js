"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordController = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
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
const overdueBooks = (0, catchAsync_1.default)(async (req, res) => {
    const data = await borrowRecord_services_1.borrowRecordService.overdueBooks();
    if (data?.length > 0) {
        (0, successRespon_1.default)(res, {
            status: http_status_1.default.OK,
            success: true,
            message: 'Overdue borrow list fetched',
            data: data,
        });
    }
    else {
        (0, successRespon_1.default)(res, {
            status: http_status_1.default.OK,
            success: true,
            message: 'No overdue books',
            data,
        });
    }
});
exports.borrowRecordController = {
    createBorrowRecord,
    overdueBooks,
};
