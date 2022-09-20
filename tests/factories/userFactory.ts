import { faker } from "@faker-js/faker"
import jwt, {Secret} from "jsonwebtoken"

import prisma from "../../src/config/database"
import { hashPassword } from "../../src/services/usersServices"

export function user() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}



export async function generateToken() {
    const userCreated = user()
    const userDb: any = await prisma.users.create({
        data: userCreated
    })
    const userId = userDb.id
    console.log(process.env.JWT_SECRET)
    return jwt.sign({ userId }, process.env.JWT_SECRET as Secret, {
        expiresIn: "30d",
    });
}


export async function createUser() {
    const userCreated = user();
    const hashedPassword = await hashPassword(userCreated.password)
    await prisma.users.create({
        data: {
            email: userCreated.email,
            password: hashedPassword
        }
    })

    return userCreated
}