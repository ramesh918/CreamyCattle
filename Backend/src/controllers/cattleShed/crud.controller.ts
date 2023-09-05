import { Request, Response } from 'express';
import CattleShedModel, { ICattleShed } from '../../models/CattleShed';

export async function createCattleShed(req: Request, res: Response) {
  try {
    const newCattleShed: ICattleShed = new CattleShedModel(req.body);
    const savedCattleShed = await newCattleShed.save();
    res.status(201).json(savedCattleShed);
  } catch (error) {
    res.status(400).json({ error: 'Error creating cattle shed' });
  }
}

export async function getAllCattleSheds(req: Request, res: Response) {
  try {
    const cattleSheds = await CattleShedModel.find();
    res.json(cattleSheds);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cattle sheds' });
  }
}

export async function getCattleShedById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const cattleShed = await CattleShedModel.findById(id);
    if (!cattleShed) {
      return res.status(404).json({ error: 'Cattle shed not found' });
    }
    res.json(cattleShed);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cattle shed' });
  }
}

export async function updateCattleShedById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const updatedCattleShed = await CattleShedModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCattleShed) {
      return res.status(404).json({ error: 'Cattle shed not found' });
    }
    res.json(updatedCattleShed);
  } catch (error) {
    res.status(500).json({ error: 'Error updating cattle shed' });
  }
}

export async function deleteCattleShedById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedCattleShed = await CattleShedModel.findByIdAndDelete(id);
    if (!deletedCattleShed) {
      return res.status(404).json({ error: 'Cattle shed not found' });
    }
    res.json({ message: 'Cattle shed deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting cattle shed' });
  }
}
