import * as disciplinesRepository from "../repositories/disciplinesRepositories"

export async function findByName(name: string) {
    const discipline = await disciplinesRepository.findByName(name)

    if (!discipline) throw { type: "not_found", message: "non-existent category" }
    
    return discipline
}
