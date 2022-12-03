import { Router } from "express";
import tokenValidator from "../middlewares/tokenValidator";
import schemaValidator from "../middlewares/schemaValidator";
import { createSolicitation } from "../middlewares/joiSchemas/solicitationSchemas";
import solicitationController from "../controllers/solicitationController";

const solicitationRouter = Router();
const solicitation = new solicitationController();

solicitationRouter.use(tokenValidator);
solicitationRouter.post(
  "/create",
  schemaValidator(createSolicitation),
  solicitation.create
);

export default solicitationRouter;
