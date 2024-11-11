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
        lt: currentDate,
      },
      returnDate: null,
    },
    include: {
      book: true,
      member: true,
    },
  });

  // if there is no overdue book then return []
  if (overdueBooks?.length === 0) {
    return [];
  }

  // if there have overdue books
  if (overdueBooks?.length > 0) {
    // overdue books
    const overdueData = overdueBooks?.map((borrowBook) => {
      // calculate the over due days.
      const overDueDays: any = Math.floor(
        (currentDate - new Date(borrowBook.borrowDate)) / (1000 * 60 * 60 * 24),
      );

      // return borrow book
      return {
        borrowId: borrowBook.borrowId,
        bookTitle: borrowBook.book.title,
        borrowerName: borrowBook.member.name,
        overdueDays: overDueDays,
      };
    });

    return overdueData;
  }
};

export const borrowRecordService = {
  createBorrowRecord,
  overdueBooks,
};
