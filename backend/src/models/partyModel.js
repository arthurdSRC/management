import mongoose, { Schema } from "mongoose";
import { serviceSchema } from "./serviceModel.js";

const partySchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  budget: { type: Number, required: true },
  service: { type: [serviceSchema], required: true }

}, { timestamps: true })

const Party = mongoose.model("Party", partySchema)

export { partySchema, Party }