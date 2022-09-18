import { Router } from "express"
import app from "../app"
import { validateSchema } from "../middlewares/validateSchema"
import { userSchema } from "../schemas/userSchemas"

const authRoute = Router()

app.post("/signup",
    validateSchema(userSchema),
    
)


export default authRoute