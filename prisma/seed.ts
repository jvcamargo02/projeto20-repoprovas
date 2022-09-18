import prisma from "../src/config/database";

async function main() {
    await prisma.terms.upsert({ where: { number: 1 }, update: {}, create: { number: 1 } });
    await prisma.terms.upsert({ where: { number: 2 }, update: {}, create: { number: 2 } });
    await prisma.terms.upsert({ where: { number: 3 }, update: {}, create: { number: 3 } });
    await prisma.terms.upsert({ where: { number: 4 }, update: {}, create: { number: 4 } });
    await prisma.terms.upsert({ where: { number: 5 }, update: {}, create: { number: 5 } });
    await prisma.terms.upsert({ where: { number: 6 }, update: {}, create: { number: 6 } });

    await prisma.categories.upsert({ where: { name: "Projeto" }, update: {}, create: { name: "Projeto" } });
    await prisma.categories.upsert({ where: { name: "Prática" }, update: {}, create: { name: "Prática" } });
    await prisma.categories.upsert({ where: { name: "Recuperação" }, update: {}, create: { name: "Recuperação" } });

    await prisma.disciplines.upsert({
        where: { name: "HTML e CSS"},
        update: { termId: 1 },
        create: { name: "HTML e CSS", termId: 1 },
    });
    await prisma.disciplines.upsert({
        where: { name: "JavaScript" },
        update: { termId: 2 },
        create: { name: "JavaScript", termId: 2 },
    });
    await prisma.disciplines.upsert({
        where: { name: "React" },
        update: { termId: 3 },
        create: { name: "React", termId: 3 },
    });
    await prisma.disciplines.upsert({
        where: { name: "Humildade" },
        update: { termId: 1 },
        create: { name: "Humildade", termId: 1 },
    });
    await prisma.disciplines.upsert({
        where: { name: "Planejamento" },
        update: { termId: 2 },
        create: { name: "Planejamento", termId: 2 },
    });
    await prisma.disciplines.upsert({
        where: { name: "Autoconfiança" },
        update: { termId: 3 },
        create: { name: "Autoconfiança", termId: 3 },
    });

    await prisma.teachers.upsert({ where: { name: "Diego Pinho" }, update: {}, create: { name: "Diego Pinho" } });
    await prisma.teachers.upsert({ where: { name: "Bruna Hamori" }, update: {}, create: { name: "Bruna Hamori" } });
}

main()
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
