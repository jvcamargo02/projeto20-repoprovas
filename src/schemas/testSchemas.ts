import joi from "joi"

export const testSchema = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    category: joi.string().required(),
    discipline: joi.string().required(),
    teacher: joi.string().required()
})