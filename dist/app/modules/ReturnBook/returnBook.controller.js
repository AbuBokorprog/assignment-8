"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const successRespon_1 = __importDefault(require("../../utils/successRespon"));
const returnBook_service_1 = require("./returnBook.service");
const returnBorrowBook = (0, catchAsync_1.default)(async (req, res) => {
    await returnBook_service_1.returnService.returnBorrowBook(req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Book returned successfully',
    });
});
exports.returnBookController = {
    returnBorrowBook,
};
