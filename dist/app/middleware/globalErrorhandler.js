"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const globalErrorhandler = (err, req, res, next) => {
    const status = 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
        success: false,
        status: status,
        message: message,
        error: config_1.default.node_env === 'development' ? err : message,
    });
};
exports.default = globalErrorhandler;
