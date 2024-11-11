/* eslint-disable @typescript-eslint/no-explicit-any */
import { Member, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// create member service
const createMember = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

// retrieve member service
const RetrieveAllMembers = async () => {
  const result = await prisma.member.findMany({});

  return result;
};

// retrieve all member service
const RetrieveMemberById = async (id: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId: id,
    },
  });

  return result;
};

// update member service
const UpdateMember = async (id: string, payload: Partial<Member>) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: payload,
  });

  return result;
};

// delete member service
const DeleteMember = async (id: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });

  return result;
};

export const memberService = {
  createMember,
  RetrieveAllMembers,
  RetrieveMemberById,
  UpdateMember,
  DeleteMember,
};
