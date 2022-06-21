import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

// React version 18
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
