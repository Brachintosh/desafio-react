import React from 'react'
import '../../App.css';
import useMovies from '../../hooks/useMovies';

const Home = () => {
    const { movies } = useMovies();// eslint-disable-line
    console.log('soy useMovies :>> ', movies);

    return (

        <div style={{position:'absolute'}}>
            <img style={{position:'relative', height:'40px', width:'40px', margin:'2px 0px -20px 1rem'}} src="https://img.icons8.com/office/80/1A1A1A/starred-ticket.png" className="logo-ticket" alt="logo" />
        </div>

      );
};

export default Home;