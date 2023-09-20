

import { Request, Response } from 'express';
import fs from 'fs'

// Function to upload an image
export const uploadAnimalImage = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
    }

    // Assuming you have a base URL where the images are served from
    const baseUrl = 'http://localhost:3000/api/v1/image/'; // Change this to your actual base URL

    // Generate the image URL based on the base URL and the file's originalname
    const imageUrl = baseUrl + req.file?.filename;

    // You can save the imageURL in your database or return it in the response
    // For now, we'll return it in the response
     res.status(200).json({ imageUrl });
  } catch (error) {
    console.error(error);
   res.status(500).json({ error: 'Error uploading image' });
  }
};



// Function to serve an uploaded file by filename
export const serveFile = (req: Request, res: Response): void => {
  try {
    const filename = req.params.filename;

    const filePath = "./uploads/"+filename
    const src = fs.createReadStream(filePath);
    src.pipe(res);
  } catch (error) {
    console.error(error);
     res.status(500).json({ error: 'Error serving file' });
  }
};
