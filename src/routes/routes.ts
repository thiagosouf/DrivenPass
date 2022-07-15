import { Router } from "express";
import authUser from "./authRouter.js"
import credentials from "./credentialsRouter.js"
import notes from "./notesRouter.js"
import cards from "./cardsRouter.js"
import wifi from "./wifisRouter.js"

const router = Router();

router.use(authUser)
router.use(credentials)
router.use(notes)
router.use(cards)
router.use(wifi)

export default router;