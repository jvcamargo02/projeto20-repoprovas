export interface User {
    id: number,
    email: string,
    password: string
}

export interface UserRequest {
    email: string,
    password: string,
    confirmPassword: string
}


