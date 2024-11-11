"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./app/route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
// application routes
app.use('/api', route_1.default);
app.get('/', (req, res) => {
    res.send('Project setup home page');
});
// global error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(globalErrorhandler_1.default);
// notfound route handler
app.use(notFound_1.default);
exports.default = app;
