import Joi from 'joi';
import RoleModel from '../../models/Role'; // Import your RoleModel

export const userValidationSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Username is required.',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required.',
  }),
  role: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .custom(async (value, helpers) => {
      // Check if the role ID exists in the "Role" collection in MongoDB
      const roleExists = await RoleModel.exists({ _id: value });

      if (!roleExists) {
        return helpers.error('any.custom', { messages: { 'custom.roleNotFound': 'Role not found in the database.' } });
      }

      return value;
    })
    .messages({
      'any.required': 'Role ID is required.',
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
