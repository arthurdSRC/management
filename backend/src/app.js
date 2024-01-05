import express from "express"
import cors from "cors"
import { connectDB } from "./db/conn.js";

const app = express();

app.use(express.json())

app.use(cors());

connectDB();



export default app;

