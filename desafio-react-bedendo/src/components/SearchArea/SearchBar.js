import React from 'react'
import '../../App.css'
const SearchBar = () => {
  return (
    <div className='App-SearchBar'>
        <div className='container'>
            <div className='row'>
                <section className='col s5 offset-1' >
                    <form action="">
                        <div className='input-field'>
                            <input type='text' placeholder='Buscar película...' />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}

export default SearchBar;