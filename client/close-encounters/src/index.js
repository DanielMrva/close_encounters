import React from 'react';
// import App from './App';
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css';
import './index.css';
import MapWrapper from './pages/basic-map';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MapWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
