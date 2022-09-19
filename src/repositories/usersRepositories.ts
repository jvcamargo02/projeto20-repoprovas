import prisma from "../config/database";
import { User, UserData } from "../types/userTypes";

export async function findById(id: number) {
    return await prisma.users.findFirst({
        where: {
            id
        }
    })
}

export async function findUserByEmail(email: string): Promise<User | null> {
    return await prisma.users.findUnique({
        where: {
            email,
        },
    });
}

export async function create(userData: UserData) {
    return await prisma.users.create({
        data: {
            email: userData.email,
            password: userData.password,
        },
    });
}
