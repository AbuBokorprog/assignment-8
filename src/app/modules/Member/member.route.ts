import express from 'express';
import requestValidation from '../../utils/validationSchema';
import { memberController } from './member.controller';
import { createMemberSchema, updateMemberSchema } from './member.validation';

const router = express.Router();

router.post(
  '/',
  requestValidation(createMemberSchema),
  memberController.createMember,
);
router.get('/', memberController.RetrieveAllMembers);
router.get('/:id', memberController.RetrieveMemberById);
router.patch(
  '/:id',
  requestValidation(updateMemberSchema),
  memberController.UpdateMember,
);
router.delete('/:id', memberController.DeleteMember);

export const memberRouter = router;
