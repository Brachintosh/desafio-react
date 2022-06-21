import { useContext } from "react";
import Context, { MoviesContextProvider } from "../context/MoviesContext"; // eslint-disable-line

export default function useMovies() {
    // const { movies } = useContext()
    console.log('soy useMovies >>> ', useContext(Context));

    return useContext(Context);
}