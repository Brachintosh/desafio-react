import React from 'react';

const MovieCard = ({movie}) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  // console.log('ESTE ES movie :>> ', movie);
  return (
    <div className="card darken-1 col s10">
      <div className="card-content">
        <div className={'movie-card'}>
          <h5 className={'movie-title'}>
            <i className='material-icons'>keyboard_arrow_right</i>{" "}{movie.title}
          </h5>
          <div className="divider"></div><br/>
          {
            movie?.poster_path ?
            <div class="card-image">
              <img className={'movie-cover'} src={`${IMG_PATH}${movie.poster_path}`} alt='movie-cover' />
              {/* <span class="card-title">{movie.title}</span> */}
            </div>
            : null
          }<br/>
          <div className="divider"></div><br/>
          <p className="card-text grey-text text-darken-2" >{movie.overview}</p><br/>
          <h6 className="card-text grey-text text-darken-3" >
          <i className='material-icons'>grade</i>{" "}
                  Popularity: {movie.vote_average}
          </h6>
        </div>
      </div>
    </div>
  )
  
}
export default MovieCard;

// return (
//   <div className="row">
//     <div className="col s12 m12 ">
//       <div className="card col s10">
//         <div className="card-content">
//           <span className="card-title grey-text text-darken-4 " >
//             <i className='material-icons'>keyboard_arrow_right</i>{" "}
//             {movie.title}</span><div className="divider"></div><br/>
//           {
//             movie.poster_path ? <img className={'movie-cover'} src={`${IMG_PATH}${movie.poster_path}`} alt="movie-font" />
//             : null
//           }
//           <br/><br/>
//           <span className="card-text grey-text text-darken-2" >{movie.overview}</span>
//           <p className="flow-text grey-text text-darken-3" style={{paddingTop:'20px'}} >
//             <i className='material-icons'>grade</i>{" "}
//               Popularity: {movie.vote_average}</p>

//         </div>
//       </div>
//     </div>
//   </div>
// )