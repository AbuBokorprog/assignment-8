import { z } from 'zod';

// Create Member Schema
export const createMemberSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number is too short' }),
  membershipDate: z.preprocess(
    (arg) => (typeof arg === 'string' ? new Date(arg) : arg),
    z.date().optional(),
  ),
});

// Update Member Schema
export const updateMemberSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  membershipDate: z
    .preprocess(
      (arg) => (typeof arg === 'string' ? new Date(arg) : arg),
      z.date(),
    )
    .optional(),
});

export type CreateMemberInput = z.infer<typeof createMemberSchema>;
export type UpdateMemberInput = z.infer<typeof updateMemberSchema>;
