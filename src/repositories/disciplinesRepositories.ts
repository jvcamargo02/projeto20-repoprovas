import prisma from "../config/database";

export async function findByName(name: string) {
    return await prisma.disciplines.findFirst({
        where: {
            name
        }
    })
}