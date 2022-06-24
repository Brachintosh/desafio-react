import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ movie, renderMovies, setPopular_Movies }) => {
    const [hover, setHover] = useState(null);
    const [movieRating, setMovieRating] = useState(0)
    // const [filteredMovies, setFilteredMovie] = useState([]);

    function filterByRating(stars){
      setPopular_Movies(movie.filter(a => Math.round(a.vote_average /2) === stars))
    setMovieRating(stars);


  }

  useEffect(()=> {
    renderMovies();
  },[]);

  return (
    <div>
      {[ ...Array(5)].map( (s, i) => {
        const ratingValue = i + 1;

            return (
                <label key={ratingValue}>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => filterByRating(ratingValue)}
                    />
                    
                    <FaStar 
                        key={ratingValue}
                        className='star-rating'
                        color={ratingValue <= (hover || movieRating) ? "#ffc107" : "#e4e5e9"}
                        size={20}
                        onMouseEnter={() => setHover(ratingValue) }
                        onMouseOut={() => setHover(null) }
                    />
                </label>
            )
      })}
      <p  style={{color:'aliceblue'}}>The rating is: {movieRating}</p>
    </div>
  )
}

export default Star;

