
export {

}

declare global{
    namespace NodeJs {
        interface ProcessEnv{
            PORT: number;
            DATABASE_URL: string;
            TOKEN_SECRET: string;
        }
    }
}