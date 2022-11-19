import {Router} from 'express';
import Auth from '../controllers/authController';

const auth = new Auth();

const login = Router()

login.post('/sign-in', auth.login)

export default login