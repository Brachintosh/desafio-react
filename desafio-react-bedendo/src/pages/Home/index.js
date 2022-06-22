import React from 'react'
import '../../App.css';
import useMovies from '../../hooks/useMovies';

const Home = () => {

    const { movies } = useMovies();
    console.log('soy movies :>> ', movies);

    return (

        <div className="App">
            <h1>Hola brachintosh!</h1>
            <img src="https://img.icons8.com/office/80/1A1A1A/starred-ticket.png" className="logo-ticket" alt="logo" />
        </div>

      );
}

export default Home
