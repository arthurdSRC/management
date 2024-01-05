import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({

  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true }
})

const Service = mongoose.model("Service", serviceSchema)

export { serviceSchema, Service }
