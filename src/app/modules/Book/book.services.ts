/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// create book service
const createBook = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// Retrieve books
const RetrieveAllBooks = async () => {
  const result = await prisma.book.findMany({});

  return result;
};

// Retrieve book by id
const RetrieveBookById = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId: id,
    },
  });

  return result;
};

// Update book service
const UpdateBook = async (id: string, payload: Partial<Book>) => {
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

// Delete book service
const DeleteBook = async (id: string) => {
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

export const bookService = {
  createBook,
  RetrieveAllBooks,
  RetrieveBookById,
  UpdateBook,
  DeleteBook,
};
