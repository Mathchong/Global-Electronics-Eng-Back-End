import { Request, Response, NextFunction } from "express";

export function errorHandler(
  error: Error | AplicationError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.name === "conflict") {
    return res.status(409).json({ message: error.message, status: 409 });
  }

  if (error.name === "Bad Request") {
    return res.status(400).json({ message: error.message, status: 400 });
  }

  if (error.message === "jwt expired") {
    return res.status(401).json({ message: error.message, status: 401 });
  }

  if(error.message === "invalid token"){
    return res.status(400).json({ message: error.message, status: 400 });
  }

  console.log(error.message);
  return res
    .status(500)
    .json({ status: 500, message: "Internal Server Error" });
}

type AplicationError = {
  name: string;
  message: string;
};
