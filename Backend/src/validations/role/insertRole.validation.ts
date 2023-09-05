import Joi from 'joi';

export const roleValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .messages({
      'string.base': 'Role name must be a string',
      'string.empty': 'Role name cannot be empty',
      'any.required': 'Role name is required',
    }),
  permissions: Joi.array()
    .items(Joi.string())
    .optional()
    .messages({
      'array.base': 'Permissions must be an array',
      'array.items': 'Each permission must be a string',
    }),
});
