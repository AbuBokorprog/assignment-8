"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMemberSchema = exports.createMemberSchema = void 0;
const zod_1 = require("zod");
// Create Member Schema
exports.createMemberSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'Name is required' }),
    email: zod_1.z.string().email({ message: 'Invalid email address' }),
    phone: zod_1.z.string().min(10, { message: 'Phone number is too short' }),
    membershipDate: zod_1.z.date(),
});
// Update Member Schema
exports.updateMemberSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().optional(),
    membershipDate: zod_1.z.date().optional(),
});
