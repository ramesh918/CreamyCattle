import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  role: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  adharNumber: number; // Should be unique
  email: string; // Should be unique
  adharImageURL: string;
  profilePic: string;

}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true,unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: 'Role' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  adharNumber: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  adharImageURL: { type: String },
  profilePic: { type: String },

});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
