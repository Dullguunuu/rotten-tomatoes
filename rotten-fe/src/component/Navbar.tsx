import React from 'react';
import Link from 'next/link';

const navbarData =
    [
        { navDesc: "MOVIES", navLink: "/movies" },
        { navDesc: "TV SHOWS", navLink: "/tv_shows" },
        { navDesc: "MOVIE TRIVIA", navLink: "/movie_trivia" },
        { navDesc: "NEWS", navLink: "/news" },
    ]

export const Navbar = () => {
    return (
        <div className='flex h-24 mt-24 w-3/5' style={{ background: "#fa320a" }}>
            <img
                style={{ height: "50px" }}
                alt="Rotten Tomatoes"
                src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
            />
            <input placeholder='Search...' className='border-white' />
            <ul className='flex text-white'>
                {navbarData.map((e, index) => (
                    <li key={index}><Link href={e.navLink}>{e.navDesc}</Link></li>
                ))}
            </ul>
        </div>
    )
}
