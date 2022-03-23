import React from 'react';
import './pokemonInfo.css';

interface InfoProps {
    weight: number;
    height: number;
}

export const PokemonInfo: React.FC<InfoProps> = ({weight, height}) => {
  return (
    <div className='pokemonInfo'>
        <span className="pokemonInfoText">Weight: {weight}</span>
        <span className="pokemonInfoText">Height: {height}</span>
    </div>
  )
}
