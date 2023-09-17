import express from 'express';
import { authenticateToken } from '../middlewares/authenticateUser'; // Import your authentication middleware
import {
  createCattleShed,
  getAllCattleSheds,
  getCattleShedById,
  updateCattleShedById,
  deleteCattleShedById,
} from '../controllers/cattleShed/crud.controller';
import validateRequest from '../middlewares/validationRequest'
import { cattleShedValidationSchema } from '../validations/cattleShed/cattleShed.validation';

const router = express.Router();



/**
 * @swagger
 * /api/v1/cattle-sheds:
 *   post:
 *     summary: Create a new cattle shed
 *     tags:
 *       - Cattle Sheds
 *     parameters:
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CattleShedInput'
 *     responses:
 *       201:
 *         description: Cattle shed created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CattleShed'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: Error creating cattle shed
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error creating cattle shed
 */
router.post('/', validateRequest(cattleShedValidationSchema, "body"), authenticateToken, createCattleShed);

/**
 * @swagger
 * /api/v1/cattle-sheds:
 *   get:
 *     summary: Get all cattle sheds
 *     tags:
 *       - Cattle Sheds
 *     parameters:
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *         required: true
 *         description: authorization parameter in header
 *     responses:
 *       200:
 *         description: Cattle sheds retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CattleShed'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error fetching cattle sheds
 */
router.get('/', authenticateToken, getAllCattleSheds);

/**
 * @swagger
 * /api/v1/cattle-sheds/{id}:
 *   get:
 *     summary: Get a cattle shed by ID
 *     tags:
 *       - Cattle Sheds
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cattle Shed ID
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *         required: true
 *         description: authorization parameter in header
 *     responses:
 *       200:
 *         description: Cattle shed retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CattleShed'
 *       404:
 *         description: Cattle shed not found
 *         content:
 *           application/json:
 *             example:
 *               error: Cattle shed not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error fetching cattle shed
 */
router.get('/:id', authenticateToken, getCattleShedById);

/**
 * @swagger
 * /api/v1/cattle-sheds/{id}:
 *   put:
 *     summary: Update a cattle shed by ID
 *     tags:
 *       - Cattle Sheds
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cattle Shed ID
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *         required: true
 *         description: authorization parameter in header
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CattleShedInput'
 *     responses:
 *       200:
 *         description: Cattle shed updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CattleShed'
 *       404:
 *         description: Cattle shed not found
 *         content:
 *           application/json:
 *             example:
 *               error: Cattle shed not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error updating cattle shed
 */
router.put('/:id', authenticateToken,updateCattleShedById);

/**
 * @swagger
 * /api/v1/cattle-sheds/{id}:
 *   delete:
 *     summary: Delete a cattle shed by ID
 *     tags:
 *       - Cattle Sheds
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cattle Shed ID
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *         required: true
 *         description: authorization parameter in header
 *     responses:
 *       200:
 *         description: Cattle shed deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Cattle shed deleted
 *       404:
 *         description: Cattle shed not found
 *         content:
 *           application/json:
 *             example:
 *               error: Cattle shed not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error deleting cattle shed
 */
router.delete('/:id', authenticateToken, deleteCattleShedById);

export default router;
