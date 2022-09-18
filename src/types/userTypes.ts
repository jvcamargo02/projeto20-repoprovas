export interface User {
    id: number;
    email: string;
    password: string;
}

export interface UserRequest {
    email: string;
    password: string;
    passwordConfirm: string;
}

export type UserLoginData = Omit<UserRequest, "passwordConfirm">

export type UserData = Omit<User, "id">;
