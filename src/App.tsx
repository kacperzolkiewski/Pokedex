import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect} from 'react';
import { addPokemons, fetchPokemons } from './apiCalls';
import './App.css';
import { FilterForm } from './components/FilterForm/FilterForm';
import { PokemonList } from './components/PokemonList/PokemonList';
import { ThemeButton } from './components/ThemeButton/ThemeButton';
import { PokemonContext } from './context/PokemonContext/PokemonContext';

const App: React.FC = () => {
  const { state, dispatch } = useContext(PokemonContext)

  useEffect(() => {
    fetchPokemons(dispatch)
  }, [dispatch])

  return (
    <div className="app" >
      <ThemeButton />
      <FilterForm />
      <h1 className="appTitle">
        Pokedex
      </h1>
      {state.isFetching
        ? <CircularProgress style={{ color: '#FDF500', width: '50px', marginTop: '50px' }} />
        : <>
          <PokemonList />
          <button className="appPokemonsBtn" onClick={() => addPokemons(dispatch)}>More...</button>
        </>
      }
    </div>
  );
}

export default App;
