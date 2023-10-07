import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/user/crud.controller'; // Import your controller functionsm


import{getAllManagers} from '../controllers/user/manager.crud.controller'

import { authenticateToken } from '../middlewares/authenticateUser'; 


import validateRequest from '../middlewares/validationRequest';
import { userValidationSchema } from '../validations/user/insertUser.validation'; // Import your validation schema


const router = express.Router();


/**
 * @swagger
 * /api/v1/managers:
 *   get:
 *     summary: Get all Managers
 *     tags:
 *       - Managers
 *     parameters:
 *       - in: header
 *         name: auth
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization parameter in header
 *     responses:
 *       200:
 *         description: Managers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error fetching users
 */
router.get('/', authenticateToken, getAllManagers);


export default router;

















