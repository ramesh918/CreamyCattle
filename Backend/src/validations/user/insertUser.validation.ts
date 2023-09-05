import Joi from 'joi';

export const userValidationSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Username is required.',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required.',
  }),
  roles: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).messages({
    'array.base': 'Roles must be an array of role IDs.',
    'string.pattern.base': 'Invalid role ID format.',
  }),
  firstName: Joi.string().required().messages({
    'any.required': 'First name is required.',
  }),
  lastName: Joi.string().required().messages({
    'any.required': 'Last name is required.',
  }),
  adharNumber: Joi.number().required().messages({
    'any.required': 'Adhar number is required.',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Invalid email format.',
  }),
  adharImageURL: Joi.string().allow('').optional(),
  profilePic: Joi.string().allow('').optional(),
});


