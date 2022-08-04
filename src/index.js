import React from 'react';
import ReactDOM from 'react-dom/client';

import "./css/style.css";
import "./css/style.css.map";
import "./css/style.min.css";
import "./css/style.min.css.map";

import "./css/materialdesignicons.css.map";
import "./css/materialdesignicons.min.css";
import "./css/materialdesignicons.min.css.map";

import "./css/testimonial.css";
import "./css/testimonial.min.css";
import "./css/testimonial.css.map";
import "./css/testimonial.min.css.map";

import "./css/tiny-slider.css";

import "./css/bootstrap.min.css";
import "./css/bootstrap.min.css.map";
import "./js/tiny-slider.js";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/tiny-slider/src/tiny-slider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
