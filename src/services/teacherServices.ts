import * as teacherRepository from "../repositories/teacherRepositories"

export async function findByName(name: string) {
    const teacher = await teacherRepository.findByName(name)

    if (!teacher) throw { type: "not_found", message: "non-existent teacher" }
    
    return teacher
}