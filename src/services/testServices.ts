import { ITestData, ITestRequest } from "../types/testTypes";
import * as testRepository from "../repositories/testRepositories";
import * as categoryServices from "../services/categoryServices";
import * as teacherDisciplinesService from "../services/teacherDisciplinesServices";

export async function create(testData: ITestRequest) {
    const category = await categoryServices.findByName(testData.category);
    const teacherDisciplines = await teacherDisciplinesService.findByDisciplineAndTeacher(
        testData.discipline,
        testData.teacher
    );

    return await testRepository.create({
        name: testData.name,
        pdfUrl: testData.pdfUrl,
        categoryId: category.id,
        teacherDisciplineId: teacherDisciplines.id,
    });
}

export async function getByDisciplines() {
    return await testRepository.findByDisciplines()
}

export async function getAllByTeacher() {
    return await testRepository.findByTeacher()
}