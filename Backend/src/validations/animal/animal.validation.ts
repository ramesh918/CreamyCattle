import Joi from 'joi';
import  CattleShedModel  from '../../models/CattleShed'; // Import the CattleShed model

export const animalValidationSchema = Joi.object({
  cattleShed: Joi.string()
    .custom(async (value, helpers) => {
      try {
        const existingCattleShed = await CattleShedModel.findById(value);
        if (!existingCattleShed) {
          throw new Error('CattleShed not found');
        }
        return value;
      } catch (error) {
        throw new Error('CattleShed validation error');
      }
    })
    .required()
    .messages({
      'any.required': 'CattleShed is required',
      'string.empty': 'CattleShed is required',
      'any.custom': 'Invalid CattleShed',
    }),
  type: Joi.string()
    .required()
    .messages({
      'any.required': 'Type is required',
      'string.empty': 'Type is required',
    }),
  healthCondition: Joi.string().allow('').messages({
    'string.empty': 'Health Condition should not be empty',
  }),
  isProvideMilk: Joi.boolean()
    .required()
    .messages({
      'any.required': 'isProvideMilk is required',
      'boolean.base': 'isProvideMilk must be a boolean',
    }),
  capacityOfMilkInLiters: Joi.number()
    .default(0)
    .messages({
      'number.base': 'Capacity of Milk must be a number',
    }),
});
