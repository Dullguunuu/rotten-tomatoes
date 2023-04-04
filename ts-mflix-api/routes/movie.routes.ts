import { create, getAll, getOne } from "../controllers/movie.controller";
import { Router } from "express";

const route = Router();

route.get("/movie/:_id", getOne).get("/movie", getAll).post("/movie", create);

export default route;