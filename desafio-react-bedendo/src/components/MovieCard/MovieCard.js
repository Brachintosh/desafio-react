import React from 'react'

const MovieCard = ({movie}) => {

  return (
    <div className="row" style={{paddingLeft:'5fr'}}>
      <div className="col s12 m10 ">
        <div className="card ">
          <div className="card-content ">
            
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