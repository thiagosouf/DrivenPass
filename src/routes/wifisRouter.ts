import { Router } from "express";
import {
    createWifi,
    listWifi,
    listWifiById,
    deleteWifi
} from "../controllers/wifisController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import { wifisSchema } from "../schemas/wifisSchema.js"

const WifisRouter = Router();

WifisRouter.post("/createwifi", validateSchema(wifisSchema), createWifi)
WifisRouter.get("/listwifi", listWifi);
WifisRouter.get("/listwifi/:id", listWifiById);
WifisRouter.delete("/deletewifi/:id", deleteWifi)

export default WifisRouter;