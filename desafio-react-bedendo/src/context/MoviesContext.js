import React, { useState } from 'react';

const Context = React.createContext({}); 

export function MoviesContextProvider({children}) {
    const [movies, setMovies] = useState([]);

    return(
        <Context.Provider value={{movies, setMovies}}>
            {children}
        </Context.Provider>
    )
};

export default Context;