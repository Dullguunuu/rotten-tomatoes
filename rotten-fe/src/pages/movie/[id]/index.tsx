import React from "react";

// interface MovieProps {
//   _id: number;
//   poster: string;
//   title: string;
//   plot: string;
// }

const index = ({ props }: { props: string }): JSX.Element => {
    console.log(props);

    return (
        <div>
            MovieDetails
        </div>
    );
};

export default index;
