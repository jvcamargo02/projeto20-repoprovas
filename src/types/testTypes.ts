export interface ITest {
    id: number,
    name: string,
    pdfUrl: string,
    categoryId: number,
    teacherDisciplineId: number
}

export interface ITestRequest {
    name: string,
    pdfUrl: string,
    category: string,
    discipline: string,
    teacher: string
}

export type ITestData = Omit<ITest, "id">