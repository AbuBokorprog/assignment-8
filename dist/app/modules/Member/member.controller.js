"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const successRespon_1 = __importDefault(require("../../utils/successRespon"));
const member_services_1 = require("./member.services");
// create member controller
const createMember = (0, catchAsync_1.default)(async (req, res) => {
    const data = await member_services_1.memberService.createMember(req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.CREATED,
        success: true,
        message: 'Member created successfully',
        data,
    });
});
// retrieve member controller
const RetrieveAllMembers = (0, catchAsync_1.default)(async (req, res) => {
    const data = await member_services_1.memberService.RetrieveAllMembers();
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Members retrieved successfully',
        data,
    });
});
// retrieve member by id controller
const RetrieveMemberById = (0, catchAsync_1.default)(async (req, res) => {
    const { memberId } = req.params;
    const data = await member_services_1.memberService.RetrieveMemberById(memberId);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Member retrieved successfully',
        data,
    });
});
// update member controller
const UpdateMember = (0, catchAsync_1.default)(async (req, res) => {
    const { memberId } = req.params;
    const data = await member_services_1.memberService.UpdateMember(memberId, req.body);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Member updated successfully',
        data,
    });
});
// delete member controller
const DeleteMember = (0, catchAsync_1.default)(async (req, res) => {
    const { memberId } = req.params;
    await member_services_1.memberService.DeleteMember(memberId);
    (0, successRespon_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Member successfully deleted',
    });
});
exports.memberController = {
    createMember,
    RetrieveAllMembers,
    RetrieveMemberById,
    UpdateMember,
    DeleteMember,
};
