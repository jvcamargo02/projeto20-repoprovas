/*
  Warnings:

  - You are about to drop the `_CategoriesToDisciplines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoriesToTeachers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DisciplinesToTeachers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoriesToDisciplines" DROP CONSTRAINT "_CategoriesToDisciplines_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToDisciplines" DROP CONSTRAINT "_CategoriesToDisciplines_B_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToTeachers" DROP CONSTRAINT "_CategoriesToTeachers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToTeachers" DROP CONSTRAINT "_CategoriesToTeachers_B_fkey";

-- DropForeignKey
ALTER TABLE "_DisciplinesToTeachers" DROP CONSTRAINT "_DisciplinesToTeachers_A_fkey";

-- DropForeignKey
ALTER TABLE "_DisciplinesToTeachers" DROP CONSTRAINT "_DisciplinesToTeachers_B_fkey";

-- DropTable
DROP TABLE "_CategoriesToDisciplines";

-- DropTable
DROP TABLE "_CategoriesToTeachers";

-- DropTable
DROP TABLE "_DisciplinesToTeachers";
