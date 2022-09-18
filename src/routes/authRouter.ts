import { Router } from "express"

import { signin, signup } from "../controllers/userControllers"
import { validateSchema } from "../middlewares/validateSchema"
import { loginSchema, userSchema } from "../schemas/userSchemas"

const authRoute = Router()

authRoute.post("/signup",
    validateSchema(userSchema),
    signup
)

authRoute.get("/signin",
    validateSchema(loginSchema),
    signin
)


export default authRoute