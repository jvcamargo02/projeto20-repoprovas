import { faker } from "@faker-js/faker";

import prisma from "../../src/config/database";

export async function test() {
    const categories = await prisma.categories.findMany();
/*     const disciplineAndTeacher = await prisma.teacherDisciplines.findMany({
        select: {
            teacher: {
                select: {
                    name: true,
                },
            },
            discipline: {
                select: {
                    name: true,
                },
            },
        },
    }); */

    const index = (array: Object[]) => {
        return Math.floor(Math.random() * array.length);
    };

    return {
        name: faker.internet.userName(),
        pdfUrl: faker.internet.url(),
        category: categories[index(categories)]?.name,
        discipline: 'HTML e CSS',
        teacher: "Diego Pinho"
    };
}
