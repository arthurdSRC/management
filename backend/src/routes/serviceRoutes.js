import { Router } from "express";
import ServiceController from "../controllers/serviceController.js";

const route = Router();
route.post("/service", ServiceController.createService)
route.get("/service/:id", ServiceController.getByService)
route.get("/service", ServiceController.getAllService)
route.put("/service/:id" ,ServiceController.updateService)
route.delete("/service/:id", ServiceController.deleteService)
export default route;