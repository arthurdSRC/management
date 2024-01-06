import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
}, { timestamps: true })

const Service = mongoose.model("Service", serviceSchema)

export { serviceSchema, Service }
