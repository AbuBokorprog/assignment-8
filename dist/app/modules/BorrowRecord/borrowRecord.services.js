"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBorrowRecord = async (payload) => {
    // get the specific book by bookId
    const book = await prisma.book.findUniqueOrThrow({
        where: {
            bookId: payload.bookId,
        },
    });
    // get the specific member by memberId
    await prisma.member.findUniqueOrThrow({
        where: {
            memberId: payload.memberId,
        },
    });
    const result = await prisma.$transaction(async (transactionClient) => {
        const result = await transactionClient.borrowRecord.create({
            data: payload,
        });
        await transactionClient.book.update({
            where: {
                bookId: book.bookId,
            },
            data: {
                availableCopies: Number(book.availableCopies - 1),
            },
        });
        return result;
    });
    return result;
};
// const RetrieveAllBorrowRecords = async () => {
//   const result = await prisma.borrowRecord.findMany({});
//   return result;
// };
// const RetrieveBorrowRecordById = async (id: string) => {
//   const result = await prisma.borrowRecord.findUnique({
//     where: {
//       borrowId: id,
//     },
//   });
//   return result;
// };
// const UpdateBorrowRecord = async (
//   id: string,
//   payload: Partial<BorrowRecord>,
// ) => {
//   await prisma.borrowRecord.findUniqueOrThrow({
//     where: {
//       borrowId: id,
//     },
//   });
//   const result = await prisma.borrowRecord.update({
//     where: {
//       borrowId: id,
//     },
//     data: payload,
//   });
//   return result;
// };
// const DeleteBorrowRecord = async (id: string) => {
//   await prisma.borrowRecord.findUniqueOrThrow({
//     where: {
//       borrowId: id,
//     },
//   });
//   const result = await prisma.borrowRecord.delete({
//     where: {
//       borrowId: id,
//     },
//   });
//   return result;
// };
const returnBorrowBook = async (payload) => {
    await prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: payload.borrowId,
        },
    });
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId: payload.borrowId,
        },
        data: {
            returnDate: new Date(), // This sets the returnDate to the current date and time
        },
    });
    return result;
};
exports.borrowRecordService = {
    createBorrowRecord,
    // RetrieveAllBorrowRecords,
    // RetrieveBorrowRecordById,
    // UpdateBorrowRecord,
    // DeleteBorrowRecord,
    returnBorrowBook,
};
