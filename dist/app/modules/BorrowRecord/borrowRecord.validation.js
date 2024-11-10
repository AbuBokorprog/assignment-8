"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBorrowRecordSchema = exports.createBorrowRecordSchema = void 0;
const zod_1 = require("zod");
// Create BorrowRecord Schema
exports.createBorrowRecordSchema = zod_1.z.object({
    borrowDate: zod_1.z.date(),
    returnDate: zod_1.z.date().optional(),
    bookId: zod_1.z.string().uuid({ message: 'Invalid book ID' }),
    memberId: zod_1.z.string().uuid({ message: 'Invalid member ID' }),
});
// Update BorrowRecord Schema
exports.updateBorrowRecordSchema = zod_1.z.object({
    borrowDate: zod_1.z.date().optional(),
    returnDate: zod_1.z.date().optional(),
    bookId: zod_1.z.string().uuid().optional(),
    memberId: zod_1.z.string().uuid().optional(),
});
