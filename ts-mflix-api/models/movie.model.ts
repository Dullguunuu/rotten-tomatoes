import { Date, model, Schema, Types } from "mongoose";

// interface IMovieSame {
//     title: { type: String, required: true },
//     rating: { type: Number, required: true },
//     direcors: { type: [String], required: true },
// };

// const movieSchemaSame = new Schema<IMovie>();

interface IMovie {
    plot: string;
    genres: [string];
    runtime: number;
    cast: string;
    poster: string;
    title: string;
    countries: [string];
    released: Date;
    type: string;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    num_mflix_comments: number;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        dvd: string;
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        lastUpdated: Date;
        rotten: number;
        production: string;
        fresh: number;
    };
    theaterId: {
        type: number;
    };
}


const movieSchema = new Schema<IMovie>(
    {
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
    }, { timestamps: true }
);

// movieSchema.virtual("theaterInfo", {
//     ref: "theaters", // The model to use
//     localField: "theaterId", // Find people where `localField`
//     foreignField: "theaterId", // is equal to `foreignField`
// });

const Movie = model<IMovie>("movies", movieSchema);

export default Movie;
