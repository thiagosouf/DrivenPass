import {Router} from "express";
import {signupController , loginController} from "../controllers/authController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import {loginSchema, signupSchema} from "../schemas/authSchema.js"

const authRouter = Router();

authRouter.post("/",validateSchema(loginSchema), loginController)
authRouter.post("/signup",validateSchema(signupSchema), signupController);signupSchema

export default authRouter;