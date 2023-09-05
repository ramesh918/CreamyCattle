import mongoose, { Document, Schema } from 'mongoose';

export interface ICattleShed extends Document {
  location: string;
  manager?: mongoose.Types.ObjectId;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

const CattleShedSchema = new Schema<ICattleShed>({
  location: { type: String, required: true },
  manager: { type: mongoose.Types.ObjectId, ref: 'Manager', required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  country: { type: String, required: true },
});

const CattleShedModel = mongoose.model<ICattleShed>('CattleShed', CattleShedSchema);

export default CattleShedModel;
