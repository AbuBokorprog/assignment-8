/* eslint-disable @typescript-eslint/no-explicit-any */
import { BorrowRecord, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createBorrowRecord = async (payload: BorrowRecord) => {
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

const overdueBooks = async () => {
  // current date
  const currentDate = new Date();

  // Get overdue borrow books
  const overdueBooks = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lt: new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000),
      },
      returnDate: null,
    },
    include: {
      book: true,
      member: true,
    },
  });

  // If there are no overdue books, return an empty array
  if (overdueBooks.length === 0) {
    return [];
  }

  // if there have overdue books
  if (overdueBooks && overdueBooks?.length > 0) {
    const currentDate = new Date();

    const overdueData = overdueBooks.map((borrowBook) => {
      // Convert borrowDate to a Date object
      const borrowDate = new Date(borrowBook.borrowDate);

      // Calculate the overdue days
      const overdueDays = Math.floor(
        (currentDate.getTime() -
          (borrowDate.getTime() + 14 * 24 * 60 * 60 * 1000)) /
          (1000 * 60 * 60 * 24),
      );

      return {
        borrowId: borrowBook.borrowId,
        bookTitle: borrowBook.book.title,
        borrowerName: borrowBook.member.name,
        overdueDays,
      };
    });

    return overdueData;
  }
};

export const borrowRecordService = {
  createBorrowRecord,
  overdueBooks,
};
