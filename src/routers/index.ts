import {Router} from 'express';
import Auth from "./loginRouter"

const mainRouter = Router();

mainRouter.use(Auth)

export default mainRouter;