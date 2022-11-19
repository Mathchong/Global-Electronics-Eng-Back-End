import Joi from "joi";

export const createUser = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
