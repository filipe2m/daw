import mongoose from "mongoose";
import { IFilePersistence } from "../../dataschema/IFilePersistence";

const FileSchema = new mongoose.Schema (
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'Files'
  }
);

export default mongoose.model<IFilePersistence & mongoose.Document>("File", FileSchema);