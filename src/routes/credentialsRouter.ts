import {Router} from "express";
import {createPass, listPass, listPassById, deletePass} from "../controllers/credentialsController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import { passSchema  } from "../schemas/credentialsSchema.js"

const credentialsRouter = Router();

credentialsRouter.post("/createpass",validateSchema(passSchema), createPass)
credentialsRouter.get("/listpass", listPass);
credentialsRouter.get("/listpass/:id", listPassById);
credentialsRouter.delete("/deletepass/:id", deletePass)

export default credentialsRouter;