import {Router} from "express";
import {createPass, listPass, listPassById, deletePass} from "../controllers/registerController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import {passSchema} from "../schemas/registerSchema.js"


const registerRouter = Router();

registerRouter.post("/create", createPass)
registerRouter.get("/listpass", listPass);
registerRouter.get("/listpass/:id", listPassById);
registerRouter.delete("/delete/:id", deletePass)

export default registerRouter;