import mongoose, { Document, Schema } from 'mongoose';

export interface ILaborer extends Document {
  name: string;
}

const LaborerSchema = new Schema<ILaborer>({
  name: { type: String, required: true },
});

const LaborerModel = mongoose.model<ILaborer>('Laborer', LaborerSchema);

export default LaborerModel;
