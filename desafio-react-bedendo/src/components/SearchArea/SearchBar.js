import React from 'react';

const SearchBar = (props) => {

  return (
    <div className='App-SearchBar'>
        <div className='container'>
            <div className='row'>
                <section className='col s5 offset-s4' >
                    <form action="" onSubmit={props.handleSearchMovies}>
                        <div className='input-field'>
                            <input type='text' placeholder='Buscar película...' onChange={props.handleChangeSearch} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}

export default SearchBar;