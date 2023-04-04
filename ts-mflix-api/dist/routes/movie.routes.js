"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_controller_1 = require("../controllers/movie.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/movie/:_id", movie_controller_1.getOne).get("/movie", movie_controller_1.getAll).post("/movie", movie_controller_1.create);
exports.default = route;
