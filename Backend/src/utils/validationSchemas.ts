import Joi from 'joi';



export const nameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.base': 'First name must be a string',
    'string.empty': 'First name cannot be empty',
    'any.required': 'First name is required',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.base': 'Last name must be a string',
    'string.empty': 'Last name cannot be empty',
    'any.required': 'Last name is required',
  }),
});