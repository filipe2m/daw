import mongoose from "mongoose";
import { IUserPersistence } from "../../dataschema/IUserPersistence";

const UserSchema = new mongoose.Schema (
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'User'
  }
);

export default mongoose.model<IUserPersistence & mongoose.Document>("User", UserSchema);