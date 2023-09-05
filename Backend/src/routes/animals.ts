import express from 'express';
import { authenticateToken } from '../middlewares/authenticateUser';
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimalById,
  deleteAnimalById,
} from '../controllers/animal/crud.controller';
import validateRequest from '../middlewares/validationRequest';
import { animalValidationSchema } from '../validations/animal/animal.validation';

const router = express.Router();

// Use authentication middleware
router.use(authenticateToken);

/**
 * @swagger
 * tags:
 *   name: Animals
 *   description: Animal operations
 */

/**
 * @swagger
 * /api/v1/animals:
 *   post:
 *     summary: Create a new animal
 *     tags:
 *       - Animals
 *     parameters:
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimalInput'
 *     responses:
 *       201:
 *         description: Animal created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: Error creating animal
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error creating animal
 */
router.post('/', validateRequest(animalValidationSchema, 'body'), createAnimal);

/**
 * @swagger
 * /api/v1/animals:
 *   get:
 *     summary: Get all animals
 *     tags:
 *       - Animals
 *     parameters:
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     responses:
 *       200:
 *         description: Animals retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error fetching animals
 */
router.get('/', getAllAnimals);

/**
 * @swagger
 * /api/v1/animals/{id}:
 *   get:
 *     summary: Get an animal by ID
 *     tags:
 *       - Animals
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Animal ID
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     responses:
 *       200:
 *         description: Animal retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Animal not found
 *         content:
 *           application/json:
 *             example:
 *               error: Animal not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error fetching animal
 */
router.get('/:id', getAnimalById);

/**
 * @swagger
 * /api/v1/animals/{id}:
 *   put:
 *     summary: Update an animal by ID
 *     tags:
 *       - Animals
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Animal ID
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimalInput'
 *     responses:
 *       200:
 *         description: Animal updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       404:
 *         description: Animal not found
 *         content:
 *           application/json:
 *             example:
 *               error: Animal not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error updating animal
 */
router.put('/:id', validateRequest(animalValidationSchema, 'body'), updateAnimalById);

/**
 * @swagger
 * /api/v1/animals/{id}:
 *   delete:
 *     summary: Delete an animal by ID
 *     tags:
 *       - Animals
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Animal ID
 *       - in: header
 *         name: authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     responses:
 *       200:
 *         description: Animal deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Animal deleted
 *       404:
 *         description: Animal not found
 *         content:
 *           application/json:
 *             example:
 *               error: Animal not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error deleting animal
 */
router.delete('/:id', deleteAnimalById);

export default router;
