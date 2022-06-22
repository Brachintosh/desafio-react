import React, { useState } from 'react';

const Context = React.createContext({}); 

export function MoviesContextProvider({children}) {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    
    const [popular_movies, setPopular_Movies] = useState([])// eslint-disable-line


    return(
        <Context.Provider 
            value={{
                movies, setMovies,
                search, setSearch,
                popular_movies, setPopular_Movies
            }}>
                
            {children}
        </Context.Provider>
    )
};

export default Context;