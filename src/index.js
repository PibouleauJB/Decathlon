// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// C'est ici que React s'attache à la balise <div id="root"> de ton fichier HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);