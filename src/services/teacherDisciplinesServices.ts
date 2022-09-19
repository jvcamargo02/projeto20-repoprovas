import * as teacherDisciplinesRepository from "../repositories/teacherDisciplinesRepository";
import * as teacherServices from "../services/teacherServices";
import * as disciplineServices from "../services/disciplineServices";

export async function findByDisciplineAndTeacher(discipline: string, teacher: string) {
    const {id: teacherId} = await teacherServices.findByName(teacher);
    const {id: disciplineId} = await disciplineServices.findByName(discipline)

    const teacherDisciplines = await teacherDisciplinesRepository.findByTeacherIdAndDisciplineId(teacherId, disciplineId)

    if(!teacherDisciplines) throw { type: "not_found", message: "Professor not registered in this discipline"}

    return teacherDisciplines
}

