import { Router } from "express";
import PartyController from "../controllers/partyController.js";

const route = Router();
route.post("/party", PartyController.create)

export default route