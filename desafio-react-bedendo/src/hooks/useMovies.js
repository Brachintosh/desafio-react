import { useContext, useEffect } from "react";
import getMovies from '../services/getMovies';
import MoviesContext from "../context/MoviesContext";

export default function useMovies() {
    const { movies, setMovies } = useContext(MoviesContext);  // eslint-disable-line 

        useEffect(function() {
            getMovies()
                .then(movies => {
                    setMovies(movies)
                })
        }, [setMovies]);

    return useContext(MoviesContext);
}