import { create, getAll, getOne } from "../controllers/comment.controller";
import { Router } from "express";

const route = Router();

route
    .get("/comment/:_id", getOne)
    .get("/comment", getAll)
    .post("/comment", create);

export default route;