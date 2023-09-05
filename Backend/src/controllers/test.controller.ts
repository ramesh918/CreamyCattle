import { Request, Response } from 'express';
import { nameValidationSchema } from '../utils/validationSchemas';

export const validateAndReturnNames = (req: Request, res: Response) => {
  const { error, value } = nameValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { firstName, lastName } = value;
  return res.status(200).json({ firstName, lastName });
};