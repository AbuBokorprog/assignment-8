"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("./catchAsync"));
const requestValidation = (schema) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        await schema.parseAsync(req.body);
        next();
    });
};
exports.default = requestValidation;