import mongoose, { Document, Schema } from 'mongoose';

export interface IMilkProduction extends Document {
  animalId?: mongoose.Types.ObjectId;
  productionDate: Date;
  quantity: number;
}

const MilkProductionSchema = new Schema<IMilkProduction>({
  animalId: { type: mongoose.Types.ObjectId, ref: 'Animal', required: true },
  productionDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
});

const MilkProductionModel = mongoose.model<IMilkProduction>('MilkProduction', MilkProductionSchema);

export default MilkProductionModel;
