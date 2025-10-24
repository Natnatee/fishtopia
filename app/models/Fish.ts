// models/Fish.ts
import { Schema, model, models } from "mongoose";

const FishSchema = new Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    size: { type: Number, default: 0 },
    price: { type: Number, default: 10 },
  },
  { timestamps: true }
);

export const Fish = models.Fish || model("Fish", FishSchema);
