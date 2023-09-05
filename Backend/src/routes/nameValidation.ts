import express from 'express';
import { validateAndReturnNames } from '../controllers/test.controller';
import { nameValidationSchema } from '../utils/validationSchemas';
import validateRequest from '../middlewares/validationRequest'
const router = express.Router();


/**
 * @swagger
 * /api/v1/name/processName:
 *   post:
 *     summary: Process first name and last name
 *     tags:
 *       - Name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NameInput'
 *     responses:
 *       200:
 *         description: Successful response with processed names
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NameInput'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             example:
 *               error: Validation error message
 */
router.post('/processName', validateRequest(nameValidationSchema, "body"), validateAndReturnNames);

export default router;
