import './App.css';
import { useEffect, useState } from 'react';
import axios from  'axios';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchArea/SearchBar';
import YouTube from 'react-youtube';
import MovieCard from './components/MovieCard/MovieCard';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FooterBrand from './components/Footer/FooterBrand';
// import Star from './components/Star/Star';

function App() {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  const API_URL =  "https://api.themoviedb.org/3";
  const KEY = 'df5066801189b2180db818abe43bc557';

  const [popular_movies, setPopular_Movies] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")
  
  const [selectedMovie, setSelectedMovie] = useState([])

  const [filteredMovies, setFilteredMovies] = useState([])
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
    setPopular_Movies(data.results.sort( (a, b) => b.vote_average - a.vote_average) );
    setFilteredMovies(data.results);

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
    // console.log('ESTO ES selectedMovie :>> ', selectedMovie);
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
    setSearchKeyword({...searchKeyword, searchKeyword:""});
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

  // const handleSort_Average_Vote = () => {
    //! Sorted by VOTE:
  //   let average_Votes = filteredMovies?.map( a => a.vote_average).sort().reverse() 
    //! Sorted by TITLE-NAME:
  //   let average_Votes = filteredMovies?filteredMovies?.map( a => a.title).sort().reverse() 
  //   console.log('average_Votes :>> ', average_Votes);
  //   return average_Votes;
  // }

  useEffect(function() {
    fetchMovies()
  },[]);

  return (
    <div>
      <section>
          <NavBar />
          <SearchBar handleSearchMovies={handleSearchMovies} handleChangeSearch={handleChangeSearch} />
          
          {/* <Star movie={ popular_movies }/> */}
          
          <div className="divider"></div>
          {/* TRAILER MOVIES */}
          <div className={'hero'}  style={{backgroundImage:`url('${IMG_PATH}/${selectedMovie.backdrop_path ? selectedMovie.backdrop_path : selectedMovie?.poster_path}')` }} >
            <div className='hero-content max-center'>

              {/* CLOSE-YouTube-BTN */}
              {
                playTrailer ? 
                <button className={'button-play button--close'} onClick={() => setPlayTrailer(false)} >Close</button>
                  :
                null
              }

              {/* VIDEO-PLAYER-RENDER */}
              {
                selectedMovie?.videos && playTrailer ? renderMovieTrailer() : null
              }
              {/* PLAY-BTN */}
              <button className='button-play' onClick={() => setPlayTrailer(true)} >Play Trailer</button>
              {/* INFO-CARD */}
              <h1 className='hero-title'>{selectedMovie?.title}</h1>
              {
                selectedMovie?.release_date ? 
                  <p className='hero-released' >
                    <i className='material-icons' style={{fontSize: '20px' }}>date_range</i>{" "}
                    Released: {selectedMovie?.release_date}.
                  </p>
                     : null
              }

              {selectedMovie?.tagline ? <p className='hero-tagline' >{selectedMovie?.tagline}</p> : null }
              {selectedMovie?.overview ? <p className='hero-overview' >{selectedMovie?.overview}</p> : null }
              
              {
                selectedMovie?.vote_average ? 
                  <p className='hero-vote' >
                    <i className='material-icons' style={{fontSize: '20px' }}>grade</i>{" "}
                    Average Vote: {selectedMovie?.vote_average}.
                  </p>
                     : null
              }
            </div>
          </div>

          {/* CARD GRID */}
          <div className="divider"></div>
            <div className='container-cards'>
              {renderMovies()}
            </div>
          <div style={{marginBottom:'30px'}} className="divider"></div>
      {
        console.log('filteredMoviess :>> ', filteredMovies?.map( a => a.title).sort().reverse() )
      }
      {/* // SCROLL TO TOP */}
      <ScrollToTop hidden showBelow={150}/>
      </section>
      {/* // FOOTER-BRAND */}
      <FooterBrand />
  </div>
  );
}

export default App;
