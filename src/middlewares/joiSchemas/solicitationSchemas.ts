import Joi from "joi";

export const createSolicitation = Joi.object({
  areaId: Joi.number().positive().required(),
  solicitation_typesId: Joi.number().positive().required(),
  priority_typesId: Joi.number().positive().required(),
  solicitation_statusId: Joi.number().positive().required(),
  itemCode: Joi.number().positive().required(),
  reference: Joi.string().max(255).required(),
  manufacturer: Joi.string().max(255).required(),
  application: Joi.string().max(255).required(),
  reason: Joi.string().max(255).required(),
});
