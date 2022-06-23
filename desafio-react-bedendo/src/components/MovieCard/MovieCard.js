import React from 'react';

const MovieCard = ({movie, selectMovie}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';
  const IMG_NOT_FOUND = "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
  // console.log('ESTE ES movie :>> ', movie);

  const handleClick_Selected = () => {
    selectMovie(movie)
    // When user clicks any card it will return to the 'hero-display'
    window.scrollTo(0, 160)
  }

  return (
    <div className="card darken-1 col s10" onClick={handleClick_Selected} style={{backgroundColor:'#EEEEEE', cursor: 'pointer'}}>
      <div className="card-content">
        <div className={'movie-card'}>
          <h5 className={'movie-title'}>
            <i className='material-icons'>keyboard_arrow_right</i>{" "}{movie.title}
          </h5>
          <div className="divider"></div><br/>
          {
            movie?.poster_path ?
            <div className="card-image">
              <img className={'movie-cover'} src={`${IMG_PATH}${movie.poster_path}`} alt='movie-cover' />
            </div>
            : 
            <div class="card-image">
              <img className={'movie-cover'} src={`${IMG_NOT_FOUND}`} alt='movie-cover' />
              <span class="card-title">No Image found!</span>
            </div>
          }<br/>
          <div className="divider"></div><br/>
          
          <p className="card-text grey-text text-darken-2" >{movie.overview}</p><br/>
          
          <h6 className="card-text grey-text text-darken-3" >
          <i className='material-icons' style={{fontSize: '20px' }}>date_range</i>{" "}
                  Released: {movie.release_date}
          </h6><br/>
          <div className="divider" style={{width:'20vw', marginLeft: '3.5em'}}></div><br/>
          <h6 className="card-text grey-text text-darken-3" >
          <i className='material-icons' style={{fontSize: '20px' }}>grade</i>{" "}
                  Popularity: {movie.vote_average}
          </h6>
         
        </div>
      </div>
    </div>
  )
  
}
export default MovieCard;