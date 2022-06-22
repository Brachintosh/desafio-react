import React from 'react'

const MovieCard = ({movie}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w300';
  // console.log('ESTE ES movie :>> ', movie);

  return (

    <div className="row" style={{paddingLeft:'5fr'}}>
      <div className="col s12 m8 ">
        <div className="card ">
          <div className="card-content ">
            {
              movie.poster_path ? <img src={`${IMG_PATH}${movie.poster_path}`} alt="movie-font" />
              : null
            }
            <span className="card-title grey-text text-darken-4">
              <i className='material-icons'>keyboard_arrow_right</i>{" "}
              {movie.title}</span>
            <span className="card-text grey-text text-darken-2" >{movie.overview}</span>
            <p className="flow-text grey-text text-darken-3" style={{paddingTop:'20px'}} >
              <i className='material-icons'>grade</i>{" "}
                Popularity: {movie.vote_average}</p>

          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieCard;