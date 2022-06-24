import React from 'react';

const NavBar = ({ popular_movies, setPopular_Movies}) => {
  console.log('popular_movies :>> ', popular_movies);
  const handle_A_Z = () => {
    const A_Z = popular_movies?.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    // console.log('result A_Z:>> ', A_Z);
  }

  const handle_Z_A = () => {
    const Z_A = popular_movies.sort(function (a, b) {
      if (b.title > a.title) {
        return 1;
      }
      if (b.title < a.title) {
        return -1;
      }
      return 0;
    });
    // console.log('result Z_A:>> ', Z_A);
  }

  // const filterByTitle = (e) => {
  //   e.preventDefault();

  //   let filtered = popular_movies.vote_average === e.target.value ? 
  //               popular_movies.filter(f => f.vote_average)
  //                 :
  //                 popular_movies.filter(f => !f.vote_average)

  //                 return console.log('filtered :>> ', filtered);
    
  // }

  function onInputChange(e) {
    e.preventDefault();
    // filterByTitle(e.target.value);
}

  // console.log('popular_movies :>> ', popular_movies);
  return (
    <nav>
        <div className='nav-wrapper container'>
          
            <img style={{height:'50px', width:'50px', marginRight:'.5rem'}} src="https://img.icons8.com/office/80/1A1A1A/starred-ticket.png" className="logo-ticket" alt="logo" />
            <a href="/" className='brand-logo' >Veo-Veo</a>
            {/* <img style={{height:'60px', width:'60px', marginLeft:'8.5rem', transform: 'rotate(90deg)'}} src="https://img.icons8.com/office/80/1A1A1A/starred-ticket.png" className="logo-ticket" alt="logo" /> */}

            <div>
            <p><u>Filter from:</u></p>
            <select 
                onChange={onInputChange} 
             >
               
                <option name='Popularity' key='keyP'> Movie Popularity </option>

                {popular_movies && popular_movies?.map((e) => (
                <option key={e.id} value={e.vote_average} >{e.vote_average}</option>
                ))}

            </select>
        </div>

        </div>
    </nav>
  )
}

export default NavBar;