import Joi from 'joi';

export const cattleShedValidationSchema = Joi.object({
  location: Joi.string().required(),
  manager: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  pincode: Joi.string().required(),
  country: Joi.string().required(),
});
