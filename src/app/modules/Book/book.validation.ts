import { z } from 'zod';

// Create Book Schema
export const createBookSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  genre: z.string().min(1, { message: 'Genre is required' }),
  publishedYear: z.number().int({ message: 'Invalid year' }),
  totalCopies: z
    .number()
    .int()
    .positive({ message: 'Must be a positive number' }),
  availableCopies: z
    .number()
    .int()
    .nonnegative({ message: 'Cannot be negative' }),
});

// Update Book Schema
export const updateBookSchema = z.object({
  title: z.string().optional(),
  genre: z.string().optional(),
  publishedYear: z.number().int().optional(),
  totalCopies: z.number().int().optional(),
  availableCopies: z.number().int().optional(),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
export type UpdateBookInput = z.infer<typeof updateBookSchema>;
