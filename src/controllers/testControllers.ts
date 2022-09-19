import { Request, Response } from "express";

import * as testServices from "../services/testServices";
import { ITestRequest } from "../types/testTypes";

export async function create(req: Request, res: Response) {
    const { name, pdfUrl, category, discipline, teacher } = req.body as ITestRequest;

    await testServices.create({ name, pdfUrl, category, discipline, teacher });

    res.sendStatus(201);
}

export async function getAllByDisciplines(req: Request, res: Response) {
    const result = await testServices.getByDisciplines();

    res.status(200).send(result);
}

export async function getAllByTeachers(req: Request, res: Response) {
    const result = await testServices.getAllByTeacher();

    res.status(200).send(result);
}
