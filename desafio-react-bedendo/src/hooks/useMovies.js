import { useContext } from "react";
import Context, { MoviesContextProvider } from "../context/MoviesContext";

export default function useMovies() {
    // const { movies } = useContext()
    console.log('soy useMovies >>> ', useContext(Context));

    return useContext(Context);
}