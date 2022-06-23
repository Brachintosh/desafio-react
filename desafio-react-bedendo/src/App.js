import './App.css';
// import { useContext } from "react";
// import MoviesContext from "./context/MoviesContext";
// import { MoviesContextProvider} from './context/MoviesContext';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

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

  const [popular_movies, setPopular_Movies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState([])

  const [searchKeyword, setSearchKeyword] = useState("")
  const [playTrailer, setPlayTrailer] = useState(false);

  const fetchMovies = async () => {
    const requestType = searchKeyword ? "search" : "discover";

    try {
      const {data} = await axios.get(`${API_URL}/${requestType}/movie`, {
      params: {
        api_key: KEY,
        query: searchKeyword,
      }
    })

    await selectOneMovie(data.results[0]);
    setPopular_Movies(data.results);
    // console.log('results :>> ', data.results[0]);
    
    } catch(err) {
        // Handle error
        console.log(err);
    }
  }

  const fetchSingleMovie = async (id) => {
    try {
      const {data} = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: KEY,
        append_to_response: 'videos',
      }
    })
    return data
    // console.log('results :>> ', data);
    
    } catch(err) {
        // Handle error
        console.log(err);
    }
  }

  const selectOneMovie = async (movie) => {
    setPlayTrailer(false);
    const selectedMovie = await fetchSingleMovie(movie.id);
    console.log('ESTO ES selectedMovie :>> ', selectedMovie);
    setSelectedMovie(selectedMovie)
  }

  const renderMovies = () => (
    popular_movies?.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        selectMovie={selectOneMovie}
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

  const renderMovieTrailer = () => {
    const movieTrailer = selectedMovie?.videos.results.find(vid => vid.name === 'Official Trailer');
    const trailer_Key = movieTrailer ? movieTrailer.key : selectedMovie?.videos.results[0].key;

    return (
      <YouTube 
        style={{marginTop:'1em'}}
        videoId={trailer_Key}
        containerClassName={'youtube-container'}
        opts={{
          width: '100%',
          height: '480px',
          playerVars: {
            autoplay: 1,
            controls: 0,
          }
        }}
      />
    )
  }

  useEffect(function() {
    fetchMovies()
  },[]);

  return (
    <div>
      
      <section>
        {/* <MoviesContextProvider> */}
          
          <NavBar />
          <SearchBar handleSearchMovies={handleSearchMovies} handleChangeSearch={handleChangeSearch} />
          <div className="divider"></div>
          
          {/* TRAILER MOVIES */}
          <div className={'hero'}  style={{backgroundImage:`url('${IMG_PATH}${selectedMovie?.backdrop_path}')` }} >
            <div className='hero-content max-center'>
              {/* CLOSE-YouTube-BTN */}
              {
                playTrailer ? 
                <button className={'button-play button--close'} onClick={() => setPlayTrailer(false)} >Close</button>
                  :
                null
              }
              
              {
                selectedMovie?.videos && playTrailer ? renderMovieTrailer() : null
              }

              <button className='button-play' onClick={() => setPlayTrailer(true)} >Play Trailer</button>
              <h1 className='hero-title'>{selectedMovie?.title}</h1>
              {selectedMovie?.release_date ? 
                  <p className='hero-released' >
                    <i className='material-icons' style={{fontSize: '20px' }}>date_range</i>{" "}
                    Released: {selectedMovie?.release_date}.
                  </p>
                     : null }
              {selectedMovie?.tagline ? <p className='hero-tagline' >{selectedMovie?.tagline}</p> : null }
              {selectedMovie?.overview ? <p className='hero-overview' >{selectedMovie?.overview}</p> : null }
              {/* tagline */}
              {selectedMovie?.vote_average ? 
                  <p className='hero-vote' >
                    <i className='material-icons' style={{fontSize: '20px' }}>grade</i>{" "}
                    Average Vote: {selectedMovie?.vote_average}.
                  </p>
                     : null }
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
