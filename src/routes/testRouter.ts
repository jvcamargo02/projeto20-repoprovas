import { Router } from "express";
import { create, getAllByDisciplines, getAllByTeachers } from "../controllers/testControllers";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";
import { validateSchema } from "../middlewares/validateSchema";
import { testSchema } from "../schemas/testSchemas";

const testRoute = Router();

testRoute.use(ensureAuthenticatedMiddleware)

testRoute.post("/test", validateSchema(testSchema), create);

testRoute.get("/test/disciplines", getAllByDisciplines);

testRoute.get("/test/teacher", getAllByTeachers);

export default testRoute;
