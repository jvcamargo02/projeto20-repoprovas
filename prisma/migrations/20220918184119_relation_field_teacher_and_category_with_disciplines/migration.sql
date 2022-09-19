-- CreateTable
CREATE TABLE "_CategoriesToDisciplines" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoriesToTeachers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DisciplinesToTeachers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriesToDisciplines_AB_unique" ON "_CategoriesToDisciplines"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriesToDisciplines_B_index" ON "_CategoriesToDisciplines"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriesToTeachers_AB_unique" ON "_CategoriesToTeachers"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriesToTeachers_B_index" ON "_CategoriesToTeachers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplinesToTeachers_AB_unique" ON "_DisciplinesToTeachers"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplinesToTeachers_B_index" ON "_DisciplinesToTeachers"("B");

-- AddForeignKey
ALTER TABLE "_CategoriesToDisciplines" ADD CONSTRAINT "_CategoriesToDisciplines_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToDisciplines" ADD CONSTRAINT "_CategoriesToDisciplines_B_fkey" FOREIGN KEY ("B") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToTeachers" ADD CONSTRAINT "_CategoriesToTeachers_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToTeachers" ADD CONSTRAINT "_CategoriesToTeachers_B_fkey" FOREIGN KEY ("B") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinesToTeachers" ADD CONSTRAINT "_DisciplinesToTeachers_A_fkey" FOREIGN KEY ("A") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinesToTeachers" ADD CONSTRAINT "_DisciplinesToTeachers_B_fkey" FOREIGN KEY ("B") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
