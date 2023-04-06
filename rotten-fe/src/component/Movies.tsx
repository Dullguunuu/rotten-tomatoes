import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";

export interface IMovie {
    _id: string;
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

const meterUrl = {
    m1: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg",
    m2: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-empty.cd930dab34a.svg",
    m3: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg",
};
const meterViewerUrl = {
    v1: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg",
    v2: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-rotten.f419e4046b7.svg",
    v3: "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-empty.eb667b7a1c7.svg",
};


const Movies = (): JSX.Element => {
    const [movies, setMovies] = useState<Array<IMovie>>([]);
    const viewerUrl =
        movies.tomatoes.viewer.meter > 60
            ? meterViewerUrl.v1
            : viewerMeter < 60
                ? meterViewerUrl.v2
                : meterViewerUrl.v3;

    const criticUrl =
        criticMeter > 60
            ? meterUrl.m1
            : criticMeter < 60
                ? meterUrl.m2
                : meterUrl.m3;


    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        axios
            .get("http://localhost:6060/api/movie")
            .then((res) => {
                console.log(res.data.result);
                setMovies(res.data.result);
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <div className="flex justify-between py-4">
                <h1>NEW & UPCOMING MOVIES</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {movies?.map((item, index) => {
                    return (
                        <div className="w-full">
                            <img src={item.poster} width={200} alt={item.title} />
                            <div className="flex">
                                <TomatoesMeter
                                    criticMeter={item.tomatoes.critic?.meter}
                                    viewerMeter={item.tomatoes.viewer?.meter}
                                />
                            </div>
                            <Link href={`/movie/${item._id}`}>
                                <h1>{item.title}</h1>
                            </Link>
                            <span>Opens up {date.toLocaleDateString()}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Movies;
