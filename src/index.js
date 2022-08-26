import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import { PokemonProvider } from './components/PokemonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <PokemonProvider>
    <App />
    </PokemonProvider>
  </BrowserRouter>
);
