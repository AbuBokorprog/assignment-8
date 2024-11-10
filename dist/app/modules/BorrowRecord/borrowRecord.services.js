"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBorrowRecord = async (payload) => {
    const result = await prisma.borrowRecord.create({
        data: payload,
    });
    return result;
};
const RetrieveAllBorrowRecords = async () => {
    const result = await prisma.borrowRecord.findMany({});
    return result;
};
const RetrieveBorrowRecordById = async (id) => {
    const result = await prisma.borrowRecord.findUnique({
        where: {
            borrowId: id,
        },
    });
    return result;
};
const UpdateBorrowRecord = async (id, payload) => {
    await prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: id,
        },
    });
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId: id,
        },
        data: payload,
    });
    return result;
};
const DeleteBorrowRecord = async (id) => {
    await prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: id,
        },
    });
    const result = await prisma.borrowRecord.delete({
        where: {
            borrowId: id,
        },
    });
    return result;
};
exports.borrowRecordService = {
    createBorrowRecord,
    RetrieveAllBorrowRecords,
    RetrieveBorrowRecordById,
    UpdateBorrowRecord,
    DeleteBorrowRecord,
};
