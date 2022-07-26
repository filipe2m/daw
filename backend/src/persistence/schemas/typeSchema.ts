import mongoose from "mongoose";
import { ITypePersistence } from "../../dataschema/ITypePersistence";

const TypeSchema = new mongoose.Schema (
  {
    name: { type: String, required: true, unique: true },
    extension: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'Types'
  }
);

export default mongoose.model<ITypePersistence & mongoose.Document>("Type", TypeSchema);