import prisma from "../config/database";

export async function findByTeacherIdAndDisciplineId(teacherId: number, disciplineId: number) {
    return await prisma.teacherDisciplines.findFirst({
        where: {
            teacherId,
            disciplineId
        }
    })
}