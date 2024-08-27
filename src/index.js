// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './index.css';  // Import fișierul CSS personalizat

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
