import './App.css';
// import { useContext } from "react";
// import MoviesContext from "./context/MoviesContext";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { MoviesContextProvider} from './context/MoviesContext';

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchArea/SearchBar';
import FooterBrand from './components/Footer/FooterBrand';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import MovieCard from './components/MovieCard/MovieCard';
import axios from  'axios';
import YouTube from 'react-youtube';

function App() {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  const API_URL =  "https://api.themoviedb.org/3";
  const KEY = 'df5066801189b2180db818abe43bc557';

  const [popular_movies, setPopular_Movies] = useState([])// eslint-disable-line
  const [selectedMovie, setSelectedMovie] = useState([])// eslint-disable-line

  const [searchKeyword, setSearchKeyword] = useState("")// eslint-disable-line

  const fetchMovies = async () => {
    const requestType = searchKeyword ? "/search" : "/discover";

    try {
      const {data} = await axios.get(`${API_URL}${requestType}/movie`, {
      params: {
        api_key: KEY,
        query: searchKeyword,
      }
    })
    setSelectedMovie(data.results[0]);
    setPopular_Movies(data.results);
    console.log('results :>> ', data.results[0]);
    
    } catch(err) {
        // Handle error
        console.log(err);
    }
  }

  const fetchSingleMovie = async (id) => {
    try {
      const {data} = await axios.get(`${API_URL}${id}`, {
      params: {
        api_key: KEY,
        query: searchKeyword,
      }
    })
    return data
    // console.log('results :>> ', data);
    
    } catch(err) {
        // Handle error
        console.log(err);
    }
  }

  const selectOneMovie = (id) => {
    const selectedMovie = fetchSingleMovie(id);
    setSelectedMovie(selectedMovie)
  }

  useEffect(() => {
    fetchMovies()
    // console.log('popular_movies :>> ', popular_movies);
  },[]);

  const renderMovies = () => (
    popular_movies?.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        selectMovie={setSelectedMovie}
      />
      )
    )
  );

  const handleSearchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKeyword);

  }
   const handleChangeSearch = (e) => {
      setSearchKeyword(e.target.value)
   }

  return (
    <div>
      
      <section>
        {/* <MoviesContextProvider> */}
          
          <NavBar />
          <SearchBar handleSearchMovies={handleSearchMovies} handleChangeSearch={handleChangeSearch} />
          <div className="divider"></div>
          
          {/* TRAILER MOVIES */}
          <div className={'hero'}  style={{backgroundImage:`url('${IMG_PATH}${selectedMovie?.backdrop_path}')` }} >
            {console.log('SOY EL STATE movieSelected >> ', selectedMovie)}
            <div className='hero-content max-center'>

              {/* <YouTube

              /> */}

              <button className='button-play'>Play Trailer</button>
              <h1 className='hero-title'>{selectedMovie?.title}</h1>
              {selectedMovie?.overview ? <p className='hero-overview' >{selectedMovie?.overview}</p> : null }
            </div>
          </div>

          {/* CARD GRID */}
          <div className="divider"></div>
            <div className='container-cards'>
              {renderMovies()}
            </div>
          <div style={{marginBottom:'30px'}} className="divider"></div>

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="details" element={<Details />} /> */}
            {/* <Route path="favourites" element={<Favourite />} /> */}
            
            {/* IF IT'S NOT FOUND  */}
            <Route path="*" 
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                  <Link  style={{ 
                    border:'solid #343434 1px', borderRadius:'8px', textDecoration:'none', fontSize: '2em',
                    color: '#343434', display: "block", margin: "1rem 0", backgroundColor:'tomato',
                    paddingLeft: '1.4rem', width:'12vw' 
                    }} to={`/`}
                  >
                    Go Home
                  </Link>
              </main>
              }
            />

          </Routes>
        {/* </MoviesContextProvider> */}

      {/* // SCROLL TO TOP */}
      <ScrollToTop hidden showBelow={150}/>
      </section>
      {/* // FOOTER-BRAND */}
      <FooterBrand />
  </div>
  );
}

export default App;
