import React from "react";
import Link from "next/link";

import { IMovie } from "./Interfaces/IMovies";
import { TomatoesMeter } from "./TomatoesMeter";

interface myProps {
    item: IMovie;
    key?: number;
}

export const MovieCard = ({ item }: myProps): JSX.Element => {
    const date = new Date(item.released);
    if (item.poster) {
        return (
            <div className="w-full">
                <img src={item.poster} width={200} alt={item.title} />

                <div className="flex">
                    <TomatoesMeter
                        criticMeter={item.tomatoes?.critic?.meter}
                        viewerMeter={item.tomatoes?.viewer?.meter}
                    />
                </div>
                <Link href={`/movie/${item._id}`}>
                    <h1>{item.title}</h1>
                </Link>
            </div>
        );
    } else {
        return <></>;
    }
};
