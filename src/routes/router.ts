import { Router } from "express";

const router = Router();

router.get("/", () => console.log("API is listening"));

export default router;
