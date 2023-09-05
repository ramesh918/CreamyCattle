import mongoose, { Document, Schema } from 'mongoose';

export interface IRole extends Document {
  name: string;
  permissions: string[];
}

const RoleSchema = new Schema<IRole>({
  name: { type: String, required: true },
  permissions: [{ type: String }],
});

const RoleModel = mongoose.model<IRole>('Role', RoleSchema);

export default RoleModel;
