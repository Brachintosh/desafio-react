import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ movie, renderMovies, setPopular_Movies }) => {
    const [hover, setHover] = useState(null);
    const [movieRating, setMovieRating] = useState(0)
    // const [filteredMovies, setFilteredMovie] = useState([]);

    function filterByRating(stars){
      // if(e.target.value === movieRating){
      //   setMovieRating(!stars);  
      // }
      // ! No anda del todo, se pisa el array de info original, ergo anda el 1er click, si no hay array de popular_movies, no puede filtrar de nuevo... abajo está la prueba para lograr que ande, pero aun falla...
      setPopular_Movies(movie.filter(a => Math.round(a.vote_average /2) === stars))
      setMovieRating(stars);
    }

  useEffect(()=> {
    renderMovies();
  },[]);

  return (
    <div style={{marginLeft:'3em'}}>
      <div>
        <p style={{color:'#eee', fontSize:'16px', marginBottom:'.5em'}}><u>Select:</u></p>
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
      <p  style={{color:'#eee'}}>The rating is: {movieRating}</p>
    </div>
  </div>
  )
}

export default Star;

// function filterByRating(stars){
//   // tener dos estados locales, ambos con las 20 pelis.
//   // cuando hago el 1er click, filtrar de un estado el .vote_average && counter +1
//   // en los proximos clicks, if(0 =! 1) 1= 2do click >> para resetear
//   if(counter % 0){
//     setBackUp(result)
//   }
//     setResult(result?.filter(a => Math.round(a.vote_average /2) === stars))


//   if(counter != 0){
//     setResult(backUp)
//   }
//   setPopular_Movies(setBackUp(backUp?.filter(a => Math.round(a.vote_average /2) === stars)))

//   setMovieRating(stars);
// }