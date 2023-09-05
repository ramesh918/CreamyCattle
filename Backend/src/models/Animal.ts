import mongoose, { Document, Schema } from 'mongoose';

export interface IAnimal extends Document {
  _id: number,
  cattleShed?: mongoose.Types.ObjectId;
  type: string;
  healthCondition: string;
  isProvideMilk: boolean;
  capacityOfMilkInLiters?: number;
}

const AnimalSchema = new Schema<IAnimal>({
  cattleShed: { type: mongoose.Types.ObjectId, ref: 'CattleShed', required: true },
  type: { type: String, required: true },
  healthCondition: { type: String },
  isProvideMilk: { type: Boolean, required: true },
  capacityOfMilkInLiters: { type: Number, default: 0 },
});

const AnimalModel = mongoose.model<IAnimal>('Animal', AnimalSchema);

export default AnimalModel;
