"use strict";
exports.__esModule = true;
exports.validateSchema = void 0;
var validateSchema = function (schema) {
    return (function (req, res, next) {
        var error = schema.validate(req.body).error;
        if (error) {
            throw { type: "unprocessable_entity", message: error };
        }
        next();
    });
};
exports.validateSchema = validateSchema;
