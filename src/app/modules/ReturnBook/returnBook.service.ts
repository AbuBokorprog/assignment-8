import { BorrowRecord, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const returnBorrowBook = async (payload: Partial<BorrowRecord>) => {
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

export const returnService = {
  returnBorrowBook,
};
