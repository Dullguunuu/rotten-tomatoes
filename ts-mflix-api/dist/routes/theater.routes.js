"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theater_controller_1 = require("../controllers/theater.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route
    .get("/theater/:_id", theater_controller_1.getOne)
    .get("/theater", theater_controller_1.getAll)
    .post("/theater", theater_controller_1.create);
exports.default = route;
