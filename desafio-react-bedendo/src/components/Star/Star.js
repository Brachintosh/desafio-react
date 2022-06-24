import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ movie }) => {
    const [movieRating, setMovieRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [movieStars, setMovieStars] = useState();

    useEffect(() => {
        setMovieStars(movie?.map(r => r.vote_average/2))

        
    },[movie])

    console.log('SOY movie EN STAR COMP :>> ', movie?.map(r => r.vote_average));
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
                        onClick={() => setMovieRating(ratingValue) }
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
      <p>The rating is: {movieRating}</p>
      <p>The rating is: {movieStars}</p>
    </div>
  )
}

export default Star;

