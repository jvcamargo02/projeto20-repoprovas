import supertest from "supertest";

import app from "../src/app";
import * as userFactory from "./factories/userFactory";
import prisma from "../src/config/database";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`;
});

describe("/signup", () => {
    it("Should return status 201 if valid schema", async () => {
        const user = userFactory.user();
        const promise = await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const createdUser = await prisma.users.findFirst({
            where: {
                email: user.email,
            },
        });

        expect(promise.status).toBe(201);
        expect(createdUser).not.toBeNull;
    });

    it("Returns 422 if it only receives part of the information (invalid schema)", async () => {
        const user = userFactory.user();
        const promise = await supertest(app)
            .post("/signup")
            .send({ email: user.email, passwordConfirm: user.password });

        expect(promise.status).toBe(422);
    });

    it("Returns 422 if password and password confirm didn't match", async () => {
        const user = userFactory.user();
        const promise = await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: "00" });

        expect(promise.status).toBe(422);
    });

    it("Returns 409 if email is already registered", async () => {
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const promise = await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });

        expect(promise.status).toBe(409);
    });
});

describe("/signin", () => {
    it("Should return 200 and a token if the schema is valid", async () => {
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const promise = await supertest(app).post("/signin").send(user);

        expect(promise.status).toBe(200);
    });

    it("Should return 404 if the email is not valid", async () => {
        const user = userFactory.user();
        const promise = await supertest(app).post("/signin").send(user);

        expect(promise.status).toBe(404);
    });

    it("Should return 404 if password is not valid", async () => {
        const user = userFactory.user();
        await supertest(app)
            .post("/signup")
            .send({ ...user, passwordConfirm: user.password });
        const promise = await supertest(app)
            .post("/signin")
            .send({ ...user, password: "00" });

        expect(promise.status).toBe(401);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});
