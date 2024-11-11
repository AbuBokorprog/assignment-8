"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const requestValidation_1 = __importDefault(require("../../utils/requestValidation"));
const member_controller_1 = require("./member.controller");
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
// create member router
router.post('/', (0, requestValidation_1.default)(member_validation_1.createMemberSchema), member_controller_1.memberController.createMember);
// retrieve members router
router.get('/', member_controller_1.memberController.RetrieveAllMembers);
// create member by id router
router.get('/:memberId', member_controller_1.memberController.RetrieveMemberById);
// update member by id router
router.patch('/:memberId', (0, requestValidation_1.default)(member_validation_1.updateMemberSchema), member_controller_1.memberController.UpdateMember);
// delete member by id router
router.delete('/:memberId', member_controller_1.memberController.DeleteMember);
exports.memberRouter = router;
