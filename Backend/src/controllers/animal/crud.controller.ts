import AnimalModel, { IAnimal } from '../../models/Animal';
import { Request, Response } from 'express';

// Create a new animal
export const createAnimal = async (req: Request, res: Response) => {
  try {
    const animalData: IAnimal = req.body;
    const animal = await AnimalModel.create(animalData);
    res.status(201).json(animal);
  } catch (error) {
    res.status(400).json({ error: 'Error creating animal' });
  }
};

// Get all animals
export const getAllAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await AnimalModel.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching animals' });
  }
};

// Get an animal by ID
export const getAnimalById = async (req: Request, res: Response) => {
  const animalId = req.params.id;

  try {
    const animal = await AnimalModel.findById(animalId);
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).json({ error: 'Animal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching animal' });
  }
};

// Update an animal by ID
export const updateAnimalById = async (req: Request, res: Response) => {
  const animalId = req.params.id;
  const updatedData: Partial<IAnimal> = req.body;

  try {
    const animal = await AnimalModel.findByIdAndUpdate(animalId, updatedData, { new: true });
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).json({ error: 'Animal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating animal' });
  }
};

// Delete an animal by ID
export const deleteAnimalById = async (req: Request, res: Response) => {
  const animalId = req.params.id;

  try {
    const animal = await AnimalModel.findByIdAndDelete(animalId);
    if (animal) {
      res.status(200).json({ message: 'Animal deleted' });
    } else {
      res.status(404).json({ error: 'Animal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting animal' });
  }
};
