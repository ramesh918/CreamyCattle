import express from 'express';
import multer from 'multer'; // For handling file uploads
import { authenticateToken } from '../middlewares/authenticateUser';
import { uploadAnimalImage, serveFile } from '../controllers/imageUpload/imageUpload.controller';

const router = express.Router();

// Define storage for uploaded images using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Define the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

// Create multer instance for handling file uploads
const upload = multer({ storage });

/**
 * @swagger
 * /api/v1/image:
 *   post:
 *     summary: Upload an image
 *     tags:
 *       - Images
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *             required:
 *               - image
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Image uploaded
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: Error uploading image
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error uploading image
 */
router.post('/',  upload.single('image'), uploadAnimalImage);

/**
 * @swagger
 * /api/v1/image:
 *   get:
 *     summary: Serve an uploaded file by filename
 *     tags:
 *       - Images
 *     parameters:
 *       - in: path
 *         name: filename
 *         schema:
 *           type: string
 *         required: true
 *         description: Filename of the uploaded file
 *     responses:
 *       200:
 *         description: File served successfully
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: File not found
 *         content:
 *           application/json:
 *             example:
 *               error: File not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Error serving file
 */
router.get('/:filename', serveFile); // Use the new controller function

export default router;

