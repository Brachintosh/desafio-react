import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App';

// React version 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="details" element={<Details />} /> */}
      {/* <Route path="favourites" element={<Favourite />} /> */}
      
      {/* NOT FOUND  */}
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
  </BrowserRouter>
);
