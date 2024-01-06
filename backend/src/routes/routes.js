import { Router } from "express";
import service from "./serviceRoutes.js";
import party from "./partyRoutes.js";

const routes = Router();

routes.use(service)


export default routes;