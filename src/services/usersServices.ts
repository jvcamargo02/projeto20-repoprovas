import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User, UserLoginData, UserRequest } from "../types/userTypes";
import * as userRepositories from "../repositories/usersRepositories";

export async function create(userData: UserRequest) {
    const { email, password, passwordConfirm } = userData;

    confirmPassword(password, passwordConfirm);
    await validNewUser(email);
    const hashedPassword: any = await hashPassword(password);

    return await userRepositories.create({ email, password: hashedPassword });
}

export async function signin(loginData: UserLoginData) {
    const { email, password } = loginData;

    const user = await isValidEmail(email);
    isValidPassword(password, user.password);

    return generateToken(user.id);
}

async function validNewUser(email: string) {
    const user = await userRepositories.findUserByEmail(email);

    if (user) throw { type: "conflict", message: "E-mail already registered" };

    return;
}

async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();

    return await bcrypt.hash(password, salt);
}

async function isValidEmail(email: string): Promise<User> {
    const user = await userRepositories.findUserByEmail(email);

    if (!user) throw { type: "not_found", message: "Incorrect email or password" };

    return user;
}

function confirmPassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) throw { type: "unprocessable_entity", message: "Password didn't mactch" };

    return;
}

function isValidPassword(password: string, hashedPassword: string) {
    const verify = bcrypt.compareSync(password, hashedPassword);

    if (!verify) throw { type: "unathorized", message: "Incorrect email or password" };
}

function generateToken(userId: number) {
    return jwt.sign({ userId }, process.env.JWT_SECRET as Secret, {
        expiresIn: "30d",
    });
}
