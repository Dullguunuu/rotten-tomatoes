import { IMovie } from "@/component/Interfaces/IMovies";
import { MovieCard } from "@/component/MovieCard";
interface movieProps {
    movies: Array<IMovie>
}
export default function index({ movies }: movieProps): JSX.Element {
    return (
        <>
            <div className="flex justify-between py-4">
                <h1>NEW & UPCOMING MOVIES</h1>
                <h6>View All</h6>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {movies?.map((item: IMovie, index: number) => {
                    return <MovieCard item={item} key={index} />;
                })}
            </div>
        </>
    );
}