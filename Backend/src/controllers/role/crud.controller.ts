import { Request, Response } from 'express';
import RoleModel, { IRole } from '../../models/Role';

// Create a new role
export const createRole = async (req: Request, res: Response) => {
  try {
    const { name, permissions } = req.body;
    const newRole: IRole = new RoleModel({ name, permissions });
    const savedRole = await newRole.save();
    res.status(201).json(savedRole);
  } catch (error) {
    res.status(500).json({ error: 'Error creating role' });
  }
};

// Get all roles
export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await RoleModel.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching roles' });
  }
};

// Get role by ID
export const getRoleById = async (req: Request, res: Response) => {
  try {
    const role = await RoleModel.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching role' });
  }
};

// Update role by ID
export const updateRoleById = async (req: Request, res: Response) => {
  try {
    const updatedRole = await RoleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: 'Error updating role' });
  }
};

// Delete role by ID
export const deleteRoleById = async (req: Request, res: Response) => {
    try {
      const deletedRole = await RoleModel.findByIdAndDelete(req.params.id);
      if (!deletedRole) {
        return res.status(404).json({ message: 'Role not found' });
      }
      res.status(200).json({ message: 'Role deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting role' });
    }
  };
  
