import {Router} from 'express';
import auth from "./authRouter"
import solicitation from './solicitation';

const mainRouter = Router();

mainRouter.use(auth)
mainRouter.use(solicitation)

export default mainRouter;