import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchArea/SearchBar';
import FooterBrand from './components/Footer/FooterBrand';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

class App2 extends Component {
  constructor() {
    super()
    this.state = {
        movies: [],
        searchTerm: '',
    }
    console.log('this.state :>> ', this.state);
    // API KEY:
    this.apiKey = process.env.REACT_APP_API;
    // console.log('state :>> ', this.state);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // API Request:
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            this.setState({ movies: [...data.results]})
            console.log('data :>> ', data);
            console.log('this.state :>> ', this.state);
          })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }
    
  render() {
    return (
        <div className='App' >
            
            <NavBar />
            <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            {/* // SCROLL TO TOP */}
            <ScrollToTop hidden showBelow={150}/>
            {/* // FOOTER-BRAND */}
            <FooterBrand />
        </div>
        );
    };
};
export default App2;