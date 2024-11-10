"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationSchema_1 = __importDefault(require("../../utils/validationSchema"));
const member_controller_1 = require("./member.controller");
const member_validation_1 = require("./member.validation");
const router = express_1.default.Router();
router.post('/', (0, validationSchema_1.default)(member_validation_1.createMemberSchema), member_controller_1.memberController.createMember);
router.get('/', member_controller_1.memberController.RetrieveAllMembers);
router.get('/:id', member_controller_1.memberController.RetrieveMemberById);
router.patch('/:id', (0, validationSchema_1.default)(member_validation_1.updateMemberSchema), member_controller_1.memberController.UpdateMember);
router.delete('/:id', member_controller_1.memberController.DeleteMember);
exports.memberRouter = router;
