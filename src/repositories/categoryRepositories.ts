import prisma from "../config/database";

export async function findByName(name: string) {
    return await prisma.categories.findFirst({
        where: {
            name
        }
    })
}