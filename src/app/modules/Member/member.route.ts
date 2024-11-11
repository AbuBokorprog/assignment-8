import express from 'express';
import requestValidation from '../../utils/requestValidation';
import { memberController } from './member.controller';
import { createMemberSchema, updateMemberSchema } from './member.validation';

const router = express.Router();

// create member router
router.post(
  '/',
  requestValidation(createMemberSchema),
  memberController.createMember,
);

// retrieve members router
router.get('/', memberController.RetrieveAllMembers);

// create member by id router
router.get('/:memberId', memberController.RetrieveMemberById);

// update member by id router
router.patch(
  '/:memberId',
  requestValidation(updateMemberSchema),
  memberController.UpdateMember,
);

// delete member by id router
router.delete('/:memberId', memberController.DeleteMember);

export const memberRouter = router;
