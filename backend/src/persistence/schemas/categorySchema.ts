import mongoose from "mongoose";
import { ICategoryPersistence } from "../../dataschema/ICategoryPersistence";

const CategorySchema = new mongoose.Schema (
  {
    name: { type: String, required: true, unique: true },
    types: { type: Array<string>, required: true }
  },
  {
    timestamps: true,
    collection: 'Categories'
  }
);

export default mongoose.model<ICategoryPersistence & mongoose.Document>("Category", CategorySchema);