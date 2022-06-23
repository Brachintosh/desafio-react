import React from 'react';

const SearchBar = (props) => {

  return (
    <div className='App-SearchBar'>
        <div className='container'>
            <div className='row'>
                <section className='col s5 offset-s4' >
                    <form action="" onSubmit={props.handleSearchMovies}>
                        <div className='input-field'>
                            <input type='text' placeholder='Ingresar nombre...' style={{color:'#DDDD'}} onChange={props.handleChangeSearch} />
                        </div>
                        {/* <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button> */}
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}

export default SearchBar;