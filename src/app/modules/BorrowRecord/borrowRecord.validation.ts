import { z } from 'zod';

// Create BorrowRecord Schema
export const createBorrowRecordSchema = z.object({
  borrowDate: z.preprocess(
    (arg) => (typeof arg === 'string' ? new Date(arg) : arg),
    z.date().optional(),
  ),
  returnDate: z.date().optional(),
  bookId: z.string().uuid({ message: 'Invalid book ID' }),
  memberId: z.string().uuid({ message: 'Invalid member ID' }),
});

// Update BorrowRecord Schema
export const updateBorrowRecordSchema = z.object({
  borrowDate: z.preprocess(
    (arg) => (typeof arg === 'string' ? new Date(arg) : arg),
    z.date().optional(),
  ),
  returnDate: z.preprocess(
    (arg) => (typeof arg === 'string' ? new Date(arg) : arg),
    z.date().optional(),
  ),
  bookId: z.string().uuid().optional(),
  memberId: z.string().uuid().optional(),
});

export type CreateBorrowRecordInput = z.infer<typeof createBorrowRecordSchema>;
export type UpdateBorrowRecordInput = z.infer<typeof updateBorrowRecordSchema>;
