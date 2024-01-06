import { Router } from "express";
import PartyController from "../controllers/partyController.js";


const route = Router();

route.get("/party/:id", PartyController.getByParty)
route.get("/party", PartyController.getAllParty)
route.post("/party", PartyController.create)
route.delete("/party/:id", PartyController.deleteParty)
route.put("/party/:id", PartyController.updateParty)
export default route