import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { errorHandler } from "../middlewares/errorHandler";

import mainRouter from "../routers";

const app = express();

app.use(cors());
app.use(json());

app.use(mainRouter);
app.use(errorHandler);

export default app;
