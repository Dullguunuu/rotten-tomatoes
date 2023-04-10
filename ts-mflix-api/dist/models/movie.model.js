"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: String,
    poster: String,
    title: String,
    countries: [String],
    released: Date,
    type: String,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number,
    },
    num_mflix_comments: Number,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number,
        },
        dvd: String,
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number,
        },
        lastUpdated: Date,
        rotten: Number,
        production: String,
        fresh: Number,
    },
    theaterId: Number,
}, { timestamps: true });
// movieSchema.virtual("theaterInfo", {
//     ref: "theaters", // The model to use
//     localField: "theaterId", // Find people where `localField`
//     foreignField: "theaterId", // is equal to `foreignField`
// });
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
