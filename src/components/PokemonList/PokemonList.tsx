import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext/PokemonContext'
import { Pokemon } from '../Pokemon/Pokemon'

export const PokemonList: React.FC = () => {
    const { state } = useContext(PokemonContext)
 
    return (
    <div className='pokemonList'>
        {state.pokemons.map((p, index) =>
          <Pokemon key={index} pokemon={p} />
        )}
    </div>
  )
}
