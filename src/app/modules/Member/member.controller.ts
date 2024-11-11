import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import successResponse from '../../utils/successRespon';
import { memberService } from './member.services';

const createMember = catchAsync(async (req, res) => {
  const data = await memberService.createMember(req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Created successfully!',
    data,
  });
});

const RetrieveAllMembers = catchAsync(async (req, res) => {
  const data = await memberService.RetrieveAllMembers();

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve All members successfully!',
    data,
  });
});

const RetrieveMemberById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await memberService.RetrieveMemberById(id);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Retrieve member successfully!',
    data,
  });
});

const UpdateMember = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await memberService.UpdateMember(id, req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Updated member successfully!',
    data,
  });
});

const DeleteMember = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await memberService.DeleteMember(id);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Updated member successfully!',
    data,
  });
});

export const memberController = {
  createMember,
  RetrieveAllMembers,
  RetrieveMemberById,
  UpdateMember,
  DeleteMember,
};
