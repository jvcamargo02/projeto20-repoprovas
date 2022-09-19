import prisma from "../config/database";
import { ITestData } from "../types/testTypes";

export async function create(testData: ITestData) {
    return await prisma.tests.create({
        data: {
            name: testData.name,
            pdfUrl: testData.pdfUrl,
            categoryId: testData.categoryId,
            teacherDisciplinesId: testData.teacherDisciplineId,
        },
    });
}

export async function findByDisciplines() {
    return await prisma.terms.findMany({
        select: {
            number: true,
            Disciplines: {
                select: {
                    id: true,
                    name: true,
                    TeacherDisciplines: {
                        select: {
                            Tests: {
                                select: {
                                    category: {
                                        select: {
                                            id: true,
                                            name: true,
                                            Tests: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    pdfUrl: true,
                                                    categoryId: true,
                                                    teacherDisciplines: {
                                                        select: {
                                                            teacher: {
                                                                select: {
                                                                    name: true,
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                distinct: ["categoryId"],
                            },
                        },
                    },
                },
            },
        },
    });
}

export async function findByTeacher() {
    return await prisma.teacherDisciplines.findMany({
        select: {
            teacher: true,
            Tests: {
                select: {
                    category: {
                        select: {
                            id: true,
                            name: true,
                            Tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    teacherDisciplines: {
                                        select: {
                                            discipline: {
                                                select: {
                                                    name: true,
                                                },
                                            },
                                        },
                                    },
                                },
                                orderBy: {
                                    teacherDisciplines: {
                                        disciplineId: "asc",
                                    },
                                },
                            },
                        },
                    },
                },
                distinct: ["categoryId"],
            },
        },
        distinct: ["teacherId"],
    });
}
