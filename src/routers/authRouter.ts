import { Router } from "express";
import Auth from "../controllers/authController";
import schemaValidator from "../middlewares/schemaValidator";
import { createUser, login } from "../middlewares/joiSchemas/authSchemas";

const authCtrl = new Auth();
const auth = Router();

auth.post("/sign-up", schemaValidator(createUser), authCtrl.createUser);
auth.post("/sign-in", schemaValidator(login) , authCtrl.login);

export default auth;
