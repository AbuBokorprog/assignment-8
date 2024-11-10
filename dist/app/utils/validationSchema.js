"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestValidation = (schema) => {
    return async (req, res, next) => {
        try {
            schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = requestValidation;
