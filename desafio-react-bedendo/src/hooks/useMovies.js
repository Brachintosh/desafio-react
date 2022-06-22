import { useContext, useEffect } from "react";
import getMovies from '../services/getMovies';
import MoviesContext from "../context/MoviesContext"; // eslint-disable-line

export default function useMovies() {
    const { movies, setMovies } = useContext(MoviesContext);

    useEffect(function() {
        getMovies()
            .then(movies => {
                setMovies(movies)
            })
    }, [setMovies]);

    console.log('soy useMovies >>> ', useContext(MoviesContext));

    return useContext(MoviesContext);
}