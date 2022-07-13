import { Router } from "express";
import authUser from "./authRouter.js"
import register from "./registerRouter.js"

const router = Router();

router.use(authUser)
router.use(register)

export default router;