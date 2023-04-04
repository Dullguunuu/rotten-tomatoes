"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const theaterSchema = new mongoose_1.Schema({
    theaterId: { type: Number, required: true },
    location: {
        address: {
            street1: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipcode: { type: String, required: true },
        },
        geo: {
            type: { type: String, required: true },
            coordinates: { type: [Number], required: true },
        }
    }
}, { timestamps: true });
const Theater = (0, mongoose_1.model)("theaters", theaterSchema);
exports.default = Theater;
