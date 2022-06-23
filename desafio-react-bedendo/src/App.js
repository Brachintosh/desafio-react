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

function App() {
  const API_URL =  "https://api.themoviedb.org/3";
  const KEY = 'df5066801189b2180db818abe43bc557';

  const [popular_movies, setPopular_Movies] = useState([])// eslint-disable-line
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
    setPopular_Movies(data.results)
    console.log('results :>> ', data.results);
    
    } catch(err) {
        // Handle error
        console.log(err);
    }
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
        <MoviesContextProvider>
          
          <NavBar />
          <SearchBar handleSearchMovies={handleSearchMovies} handleChangeSearch={handleChangeSearch} />

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
        </MoviesContextProvider>

      {/* // SCROLL TO TOP */}
      <ScrollToTop hidden showBelow={150}/>
      </section>
      {/* // FOOTER-BRAND */}
      <FooterBrand />
  </div>
  );
}

export default App;
