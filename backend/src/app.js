import express from "express"
import cors from "cors"
import { connectDB } from "./db/conn.js";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json())

app.use(cors());

app.use(routes)

connectDB();




export default app;

