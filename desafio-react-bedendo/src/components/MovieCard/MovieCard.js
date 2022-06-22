import React from 'react'

const MovieCard = ({movie}) => {

  return (
    <div>
      {movie.title}{" - "}{movie.vote_average}
    </div>
  )
}

export default MovieCard;