import { Request, Response, NextFunction } from "express"

import { verifyToken } from "../utils/jwt";

export default function tokenValidator(req: Request, res: Response, next: NextFunction){
    let token = req.headers.authorization
    if (!token) throw { name: "Bad Request", message: "Token not Sent" };
    res.locals.user = verifyToken(token);

    next();
}