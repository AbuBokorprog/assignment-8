import { z } from 'zod';

// Create BorrowRecord Schema
export const createBorrowRecordSchema = z.object({
  borrowDate: z.date(),
  returnDate: z.date().optional(),
  bookId: z.string().uuid({ message: 'Invalid book ID' }),
  memberId: z.string().uuid({ message: 'Invalid member ID' }),
});

// Update BorrowRecord Schema
export const updateBorrowRecordSchema = z.object({
  borrowDate: z.date().optional(),
  returnDate: z.date().optional(),
  bookId: z.string().uuid().optional(),
  memberId: z.string().uuid().optional(),
});

export type CreateBorrowRecordInput = z.infer<typeof createBorrowRecordSchema>;
export type UpdateBorrowRecordInput = z.infer<typeof updateBorrowRecordSchema>;
