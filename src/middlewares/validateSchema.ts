import { Request, Response, NextFunction } from "express"
import { ObjectSchema } from "joi"

export const validateSchema = (schema: ObjectSchema) => {
    return ((req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body)

        if (error) {
            throw { type: "unprocessable_entity", message: error}
        }

        next()
    })
}