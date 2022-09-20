"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    if (err === null || err === void 0 ? void 0 : err.type) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message);
    }
    console.log(err);
    return res.sendStatus(500);
}
exports.errorHandler = errorHandler;
function errorTypeToStatusCode(errorType) {
    if (errorType === "conflict")
        return 409;
    if (errorType === "not_found")
        return 404;
    if (errorType === "unauthorized")
        return 401;
    if (errorType === "unprocessable_entity")
        return 422;
    return 400;
}
