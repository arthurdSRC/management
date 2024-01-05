import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
  }
  catch (err) {
    console.log(`Erro ao concectar ao banco ${err}`)
  }
}




