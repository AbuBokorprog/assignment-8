"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordRouter = void 0;
const express_1 = __importDefault(require("express"));
const requestValidation_1 = __importDefault(require("../../utils/requestValidation"));
const borrowRecord_validation_1 = require("./borrowRecord.validation");
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const router = express_1.default.Router();
router.post('/', (0, requestValidation_1.default)(borrowRecord_validation_1.createBorrowRecordSchema), borrowRecord_controller_1.borrowRecordController.createBorrowRecord);
router.get('/overdue', borrowRecord_controller_1.borrowRecordController.overdueBooks);
exports.borrowRecordRouter = router;
