import { Router } from "express";
import authRoute from "./authRouter";

const router = Router();

router.use(authRoute)

export default router;
