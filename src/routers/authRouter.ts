import { Router } from "express";
import Auth from "../controllers/authController";
import schemaValidator from "../middlewares/schemaValidator";
import { createUser } from "../middlewares/joiSchemas/createUserSchema";

const authCtrl = new Auth();
const auth = Router();

auth.post("/sign-up", schemaValidator(createUser) ,authCtrl.createUser);

export default auth;
