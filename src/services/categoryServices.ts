import * as categoryRepository from "../repositories/categoryRepositories"

export async function findByName(name: string) {
    const category = await categoryRepository.findByName(name)
    
    if (!category) throw { type: "not_found", message: "non-existent category" }
    
    return category
}