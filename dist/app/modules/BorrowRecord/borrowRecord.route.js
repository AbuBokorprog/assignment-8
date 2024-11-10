"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationSchema_1 = __importDefault(require("../../utils/validationSchema"));
const borrowRecord_validation_1 = require("./borrowRecord.validation");
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const router = express_1.default.Router();
router.post('/', (0, validationSchema_1.default)(borrowRecord_validation_1.createBorrowRecordSchema), borrowRecord_controller_1.borrowRecordController.createBorrowRecord);
router.get('/', borrowRecord_controller_1.borrowRecordController.RetrieveAllBorrowRecords);
router.get('/:id', borrowRecord_controller_1.borrowRecordController.RetrieveBorrowRecordById);
router.patch('/:id', (0, validationSchema_1.default)(borrowRecord_validation_1.updateBorrowRecordSchema), borrowRecord_controller_1.borrowRecordController.UpdateBorrowRecord);
router.delete('/:id', borrowRecord_controller_1.borrowRecordController.DeleteBorrowRecord);
exports.borrowRecordRouter = router;
