import {Request, Response} from 'express';

export default class AuthController{
    login(req : Request, res : Response){
        res.status(200).send("ok")
    }
}