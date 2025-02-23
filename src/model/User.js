import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    name: { type: String, required: true, trim: true},
    ci: {type: String, required: true, trim: true, unique: true },
    email: {type: String, required: true, trim: true, unique: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", UserSchema);