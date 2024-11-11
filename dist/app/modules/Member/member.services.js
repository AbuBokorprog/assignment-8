"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create member service
const createMember = async (payload) => {
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
const RetrieveMemberById = async (id) => {
    const result = await prisma.member.findUnique({
        where: {
            memberId: id,
        },
    });
    return result;
};
// update member service
const UpdateMember = async (id, payload) => {
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
const DeleteMember = async (id) => {
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
exports.memberService = {
    createMember,
    RetrieveAllMembers,
    RetrieveMemberById,
    UpdateMember,
    DeleteMember,
};
