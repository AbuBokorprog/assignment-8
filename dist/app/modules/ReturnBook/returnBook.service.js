"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
exports.returnService = {
    returnBorrowBook,
};
