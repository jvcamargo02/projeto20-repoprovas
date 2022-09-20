import { Request, Response, NextFunction } from "express";

export function errorHandler(
    err: Error | any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log(req.body, req.headers.authorization,err)
    if (err?.type) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message);
    }

    console.log(err);

    return res.sendStatus(500);
}

function errorTypeToStatusCode(errorType: string) {
    if (errorType === "conflict") return 409;
    if (errorType === "not_found") return 404;
    if (errorType === "unauthorized") return 401;
    if (errorType === "unprocessable_entity") return 422;

    return 400;
}
