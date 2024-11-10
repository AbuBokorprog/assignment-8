"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBook = async (payload) => {
    const result = await prisma.book.create({
        data: payload,
    });
    return result;
};
const RetrieveAllBooks = async () => {
    const result = await prisma.book.findMany({});
    return result;
};
const RetrieveBookById = async (id) => {
    const result = await prisma.book.findUnique({
        where: {
            bookId: id,
        },
    });
    return result;
};
const UpdateBook = async (id, payload) => {
    await prisma.book.findUniqueOrThrow({
        where: {
            bookId: id,
        },
    });
    const result = await prisma.book.update({
        where: {
            bookId: id,
        },
        data: payload,
    });
    return result;
};
const DeleteBook = async (id) => {
    await prisma.book.findUniqueOrThrow({
        where: {
            bookId: id,
        },
    });
    const result = await prisma.book.delete({
        where: {
            bookId: id,
        },
    });
    return result;
};
exports.bookService = {
    createBook,
    RetrieveAllBooks,
    RetrieveBookById,
    UpdateBook,
    DeleteBook,
};