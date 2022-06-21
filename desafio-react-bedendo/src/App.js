import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import { MoviesContextProvider } from './context/MoviesContext';
import FooterBrand from './components/Footer/FooterBrand';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>

      <section>
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="details" element={<Details />} /> */}
            {/* <Route path="favourites" element={<Favourite />} /> */}
            
            {/* IF IT'S NOT FOUND  */}
            <Route path="*" 
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                  <Link  style={{ 
                    border:'solid #343434 1px', borderRadius:'8px', textDecoration:'none', fontSize: '2em',
                    color: '#343434', display: "block", margin: "1rem 0", backgroundColor:'tomato',
                    paddingLeft: '1.4rem', width:'12vw' 
                    }} to={`/`}
                  >
                    Go Home
                  </Link>
              </main>
              }
            />

          </Routes>
        </MoviesContextProvider>

      {/* // SCROLL TO TOP */}
      <ScrollToTop hidden showBelow={150}/>
      </section>
      {/* //! FOOTER-BRAND */}
      <FooterBrand />
  </div>
  );
}

export default App;
