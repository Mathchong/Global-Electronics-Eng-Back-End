import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { Schema } from "joi";

export default function schemaValidator(schema: Schema) {
  return function validate(req: Request, res: Response, next: NextFunction) {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const details = error.details.map((err) => {
        return err.message;
      });
      throw { name: "Bad Request", message: details };
    }

    next();
  };
}
