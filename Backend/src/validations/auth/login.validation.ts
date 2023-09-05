import Joi from 'joi';

export const loginValidationSchema = Joi.object({
  identifier: Joi.string().required().messages({
    'any.required': 'Username or email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
});
