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
// create book controller
const createBook = (0, catchAsync_1.default)(async (req, res) => {
    const data = await book_services_1.bookService.createBook(req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Book created successfully',
        data,
    });
});
// Retrieve all books
const RetrieveAllBooks = (0, catchAsync_1.default)(async (req, res) => {
    const data = await book_services_1.bookService.RetrieveAllBooks();
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Books retrieved successfully',
        data,
    });
});
// Retrieve book by id
const RetrieveBookById = (0, catchAsync_1.default)(async (req, res) => {
    const { bookId } = req.params;
    const data = await book_services_1.bookService.RetrieveBookById(bookId);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Book retrieved successfully',
        data,
    });
});
// Update book controller
const UpdateBook = (0, catchAsync_1.default)(async (req, res) => {
    const { bookId } = req.params;
    const data = await book_services_1.bookService.UpdateBook(bookId, req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Book updated successfully',
        data,
    });
});
// Delete book controller
const DeleteBook = (0, catchAsync_1.default)(async (req, res) => {
    const { bookId } = req.params;
    await book_services_1.bookService.DeleteBook(bookId);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Book successfully deleted',
        // data,
    });
});
exports.bookController = {
    createBook,
    RetrieveAllBooks,
    RetrieveBookById,
    UpdateBook,
    DeleteBook,
};
