import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import successResponse from '../../utils/successRespon';
import { memberService } from './member.services';

// create member controller
const createMember = catchAsync(async (req, res) => {
  const data = await memberService.createMember(req.body);

  successResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Member created successfully',
    data,
  });
});

// retrieve member controller
const RetrieveAllMembers = catchAsync(async (req, res) => {
  const data = await memberService.RetrieveAllMembers();

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Members retrieved successfully',
    data,
  });
});

// retrieve member by id controller
const RetrieveMemberById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const data = await memberService.RetrieveMemberById(memberId);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Member retrieved successfully',
    data,
  });
});

// update member controller
const UpdateMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const data = await memberService.UpdateMember(memberId, req.body);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Member updated successfully',
    data,
  });
});

// delete member controller
const DeleteMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  await memberService.DeleteMember(memberId);

  successResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Member successfully deleted',
  });
});

export const memberController = {
  createMember,
  RetrieveAllMembers,
  RetrieveMemberById,
  UpdateMember,
  DeleteMember,
};
