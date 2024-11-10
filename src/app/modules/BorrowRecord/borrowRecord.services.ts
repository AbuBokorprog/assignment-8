/* eslint-disable @typescript-eslint/no-explicit-any */
import { BorrowRecord, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createBorrowRecord = async (payload: any) => {
  const result = await prisma.borrowRecord.create({
    data: payload,
  });

  return result;
};

const RetrieveAllBorrowRecords = async () => {
  const result = await prisma.borrowRecord.findMany({});

  return result;
};

const RetrieveBorrowRecordById = async (id: string) => {
  const result = await prisma.borrowRecord.findUnique({
    where: {
      borrowId: id,
    },
  });

  return result;
};

const UpdateBorrowRecord = async (
  id: string,
  payload: Partial<BorrowRecord>,
) => {
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

const DeleteBorrowRecord = async (id: string) => {
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

export const borrowRecordService = {
  createBorrowRecord,
  RetrieveAllBorrowRecords,
  RetrieveBorrowRecordById,
  UpdateBorrowRecord,
  DeleteBorrowRecord,
};
