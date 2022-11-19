import { Request, Response } from "express";
import AuthService from "../services/authService";

const auth = new AuthService();

export default class AuthController {
  async createUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const created = await auth.createUser({ username, password });

    return res.status(201).json({status:201, created: created.username});

  }
}
