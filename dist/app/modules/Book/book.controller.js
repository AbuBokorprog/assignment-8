"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const successRespon_1 = __importDefault(require("../../utils/successRespon"));
const book_services_1 = require("./book.services");
const createBook = (0, catchAsync_1.default)(async (req, res) => {
    const data = await book_services_1.bookService.createBook(req.body);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Created successfully!',
        data,
    });
});
const RetrieveAllBooks = (0, catchAsync_1.default)(async (req, res) => {
    const data = await book_services_1.bookService.RetrieveAllBooks();
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve All books successfully!',
        data,
    });
});
const RetrieveBookById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = await book_services_1.bookService.RetrieveBookById(id);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve book successfully!',
        data,
    });
});
const UpdateBook = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = await book_services_1.bookService.UpdateBook(id, req.body);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated book successfully!',
        data,
    });
});
const DeleteBook = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = await book_services_1.bookService.DeleteBook(id);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated book successfully!',
        data,
    });
});
exports.bookController = {
    createBook,
    RetrieveAllBooks,
    RetrieveBookById,
    UpdateBook,
    DeleteBook,
};
