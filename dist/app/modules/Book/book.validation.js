"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookSchema = exports.createBookSchema = void 0;
const zod_1 = require("zod");
// Create Book Schema
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: 'Title is required' }),
    genre: zod_1.z.string().min(1, { message: 'Genre is required' }),
    publishedYear: zod_1.z.number().int({ message: 'Invalid year' }),
    totalCopies: zod_1.z
        .number()
        .int()
        .positive({ message: 'Must be a positive number' }),
    availableCopies: zod_1.z
        .number()
        .int()
        .nonnegative({ message: 'Cannot be negative' }),
});
// Update Book Schema
exports.updateBookSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    genre: zod_1.z.string().optional(),
    publishedYear: zod_1.z.number().int().optional(),
    totalCopies: zod_1.z.number().int().optional(),
    availableCopies: zod_1.z.number().int().optional(),
});
