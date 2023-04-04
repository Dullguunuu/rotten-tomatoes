"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    plot: { type: String, required: true },
    genres: { type: [String], required: true },
    runtime: { type: Number, required: true },
    rated: { type: String, required: true },
    cast: { type: [String], required: true },
    num_mflix_comments: { type: Number, required: true },
    poster: { type: String, required: true },
    title: { type: String, required: true },
    fullplot: { type: String, required: true },
    languages: { type: [String], required: true },
    released: { type: Date, required: true },
    directors: { type: [String], required: true },
    writers: { type: [String], required: true },
    awards: {
        wins: { type: Number, required: true },
        nominations: { type: Number, required: true },
        text: { type: String, required: true }
    },
    lastupdated: { type: Date, required: true },
    year: { type: Number, required: true },
    imdb: {
        rating: { type: Number, required: true },
        votes: { type: Number, required: true },
        id: { type: Number, required: true }
    },
    countries: { type: [String], required: true },
    type: { type: String, required: true },
    tomatoes: {
        viewer: {
            rating: { type: Number, required: true },
            numReviews: { type: Number, required: true },
            meter: { type: Number, required: true }
        },
        lastUpdated: { type: Date, required: true }
    }
}, { timestamps: true });
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
