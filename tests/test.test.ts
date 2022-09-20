import supertest from "supertest";

import app from "../src/app";
import prisma from "../src/config/database";
import * as testFactory from "./factories/testFactory"
import * as userFactory from "./factories/userFactory"


const client = supertest(app)

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`; 
    await prisma.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY`;
});


describe("/test", () => {

    it("Should return status 201 if valid schema", async () => {
        const test = await testFactory.test()
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const userLogin = await supertest(app).post("/signin").send(user);
        const token = userLogin?.text
        const response = await supertest(app).post("/test").send(test).set({ Authorization: `Bearer ${token}` });

        expect(response.status).toBe(201);
    })

    it("Should return status 404 if teacher or disicipline does not exist", async () => {
        const test = await testFactory.test()
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const userLogin = await supertest(app).post("/signin").send(user);
        const token = userLogin?.text
        const responseDiscipline = await supertest(app).post("/test").send({ ...test, discipline: "non_existing_test" }).set({ Authorization: `Bearer ${token}` });
        const responseTeacher = await supertest(app).post("/test").send({...test, teacher: "non_existing_test"}).set({ Authorization: `Bearer ${token}` });

        expect(responseDiscipline.status).toBe(404);
        expect(responseDiscipline.status).toBe(404);
    
    })

    it("Should return status 401 if authorization is invalid", async () => {
        const test = await testFactory.test()
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const userLogin = await supertest(app).post("/signin").send(user);
        const token = userLogin?.text
        const response = await supertest(app).post("/test").send(test).set({ Authorization: `Bearer ${token}0` });

        expect(response.status).toBe(401);
    })    


    it("Should return status 200 and an array", async () => {
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const userLogin = await supertest(app).post("/signin").send(user);
        const token = `Bearer ${userLogin?.text}`
        const response = await supertest(app).get("/test/teacher").send().set('Authorization', token);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    }); 

    it("Should return status 200 and an array", async () => {
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const userLogin = await supertest(app).post("/signin").send(user);
        const token = `Bearer ${userLogin?.text}`
        const response = await supertest(app).get("/test/disciplines").send().set('Authorization', token);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    }); 
});


afterAll(async () => {
    await prisma.$disconnect();
});