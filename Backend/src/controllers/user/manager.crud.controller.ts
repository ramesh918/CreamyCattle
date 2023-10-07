import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel, { IUser } from '../../models/User';
import RoleModel from '../../models/Role';


export async function createUser(req: Request, res: Response) {
  try {
    const { password, ...userData } = req.body;


    // Hash the password before saving it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    const newUser: IUser = new UserModel({
      ...userData,
      password: hashedPassword,
    });


    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
}
export async function getAllManagers(req: Request, res: Response) {
  try {
    const managerRole = await RoleModel.findOne({ name: "Manager" });

if (managerRole) {
  const users = await UserModel.aggregate([
    {
      $match: { role: managerRole._id },
    },
    {
      $lookup: {
        from: "roles", // Replace with the actual name of the external collection (RoleModel collection name)
        localField: "role",
        foreignField: "_id",
        as: "role",
      },
    },
    {
      $unwind: "$role",
    },
    {
      $project: {
        _id: 1,
        username: 1,
        adharNumber: 1,
        email: 1,
        roleName: "$role.name",// Include only the 'name' field from the 'role' object
        fullName: { $concat: ["$firstName", " ", "$lastName"] }, // Combine firstName and lastName into fullName
      },
    },
  ]);

  console.log(users);

    res.json(users);
}
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching users' });
  }
}


export async function getUserById(req: Request, res: Response) {
  try {
    const user: IUser | null = await UserModel.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
}


export async function updateUserById(req: Request, res: Response) {
  try {
    const updatedUser: IUser | null = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
}


export async function deleteUserById(req: Request, res: Response) {
  try {
    const deletedUser: IUser | null = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ message: 'User deleted', deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
}



