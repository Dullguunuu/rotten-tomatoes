"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_controller_1 = require("../controllers/comment.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route
    .get("/comment/:_id", comment_controller_1.getOne)
    .get("/comment", comment_controller_1.getAll)
    .post("/comment", comment_controller_1.create);
exports.default = route;
