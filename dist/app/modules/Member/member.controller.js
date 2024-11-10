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
const createMember = (0, catchAsync_1.default)(async (req, res) => {
    const data = await member_services_1.memberService.createMember(req.body);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Created successfully!',
        data,
    });
});
const RetrieveAllMembers = (0, catchAsync_1.default)(async (req, res) => {
    const data = await member_services_1.memberService.RetrieveAllMembers();
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve All members successfully!',
        data,
    });
});
const RetrieveMemberById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = await member_services_1.memberService.RetrieveMemberById(id);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve member successfully!',
        data,
    });
});
const UpdateMember = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = await member_services_1.memberService.UpdateMember(id, req.body);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated member successfully!',
        data,
    });
});
const DeleteMember = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = await member_services_1.memberService.DeleteMember(id);
    (0, successRespon_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated member successfully!',
        data,
    });
});
exports.memberController = {
    createMember,
    RetrieveAllMembers,
    RetrieveMemberById,
    UpdateMember,
    DeleteMember,
};
