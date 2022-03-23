import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PokemonProvider } from './context/PokemonContext/PokemonContext';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
