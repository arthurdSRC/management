import { Router } from "express";
import service from "./serviceRoutes.js";


const routes = Router();
routes.use(service)

export default routes;