import {Router} from 'express';
import Auth from "./authRouter"

const mainRouter = Router();

mainRouter.use(Auth)

export default mainRouter;