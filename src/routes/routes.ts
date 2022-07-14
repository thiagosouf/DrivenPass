import { Router } from "express";
import authUser from "./authRouter.js"
import credentials from "./credentialsRouter.js"

const router = Router();

router.use(authUser)
router.use(credentials)

export default router;