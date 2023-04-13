import React from "react";
import DropdownMenu from "./DropdownMenu";

export const Filter = ({ refData }: { refData: any }) => {
    console.log({ refData });

    const filterMenus = [
        {
            name: "Sort",
            data: [
                { id: 1, text: "Most Popular" },
                { id: 2, text: "New" },
                { id: 3, text: "A-Z" },
                { id: 4, text: "TOMATOMETER® (HIGHEST)" },
                { id: 5, text: "TOMATOMETER® (LOWEST)" },
            ],
        },
        {
            name: "Genre",
            data: refData?.result?.resultGenres,
        },
        {
            name: "Rating",
            data: refData?.result?.resultRated,
        },
        {
            name: "Audience score",
            data: [
                {
                    id: 1,
                    text: "FRESH At least 60% of reviews for a movie or TV show are positive",
                },
                {
                    id: 2,
                    text: "ROTTEN Less than 60% of reviews for a movie or TV show are positive.",
                },
            ],
        },
        {
            name: "Tomatometer",
            data: [
                {
                    id: 1,
                    text: "CERTIFIED FRESH - A special distinction awarded to the best reviewed movies and TV Shows.",
                },
                {
                    id: 2,
                    text: "FRESH - At least 60% of reviews for a movie or TV show are positive.",
                },
            ],
        },
    ];

    return (
        <div className="flex items-center py-2">
            {filterMenus.map((item, index) => (
                <DropdownMenu list={item.data} menuText={item.name} key={index} />
            ))}
        </div>
    );
};
