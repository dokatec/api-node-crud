import { Router } from "express";
import { index, create, update, destroy } from "./controllers/indexController";

const routes = new Router();

routes.get("/", index);
routes.post("/create", create);
routes.put("/update/:id", update);
routes.delete("/delete/:id", destroy);

export default routes;
