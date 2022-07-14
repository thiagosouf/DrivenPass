import {Router} from "express";
import {createPass, listPass, listPassById, deletePass} from "../controllers/credentialsController.js"

const credentialsRouter = Router();

credentialsRouter.post("/createpass", createPass)
credentialsRouter.get("/listpass", listPass);
credentialsRouter.get("/listpass/:id", listPassById);
credentialsRouter.delete("/deletepass/:id", deletePass)

export default credentialsRouter;