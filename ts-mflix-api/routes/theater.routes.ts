import { create, getAll, getOne } from "../controllers/theater.controller";
import { Router } from "express";

const route = Router();

route
    .get("/theater/:_id", getOne)
    .get("/theater", getAll)
    .post("/theater", create);

export default route;