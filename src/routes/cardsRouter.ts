import { Router } from "express";
import {
    createCard,
    listCard,
    listCardById,
    deleteCard
} from "../controllers/cardsController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import { cardsSchema } from "../schemas/cardsSchema.js"

const cardsRouter = Router();

cardsRouter.post("/createcard", validateSchema(cardsSchema), createCard)
cardsRouter.get("/listcard", listCard);
cardsRouter.get("/listcard/:id", listCardById);
cardsRouter.delete("/deletecard/:id", deleteCard)

export default cardsRouter;