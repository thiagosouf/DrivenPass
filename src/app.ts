import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import routers from "./routes/routes.js"

const app = express();
app.use(json());
app.use(cors());
app.use(routers);
app.use(errorHandlerMiddleware);

export default app;