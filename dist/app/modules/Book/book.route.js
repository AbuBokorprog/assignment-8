"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validationSchema_1 = __importDefault(require("../../utils/validationSchema"));
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
// create book router
router.post('/', (0, validationSchema_1.default)(book_validation_1.createBookSchema), book_controller_1.bookController.createBook);
router.get('/', book_controller_1.bookController.RetrieveAllBooks);
router.get('/:id', book_controller_1.bookController.RetrieveBookById);
router.patch('/:id', (0, validationSchema_1.default)(book_validation_1.updateBookSchema), book_controller_1.bookController.UpdateBook);
router.delete('/:id', book_controller_1.bookController.DeleteBook);
exports.bookRouter = router;
