import React, { useState } from 'react';
import './pokemon.css';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';
import { IPokemon } from '../../interfaces/pokemon_interface';

type PokemonProps = {
    pokemon: IPokemon;
}

export const Pokemon: React.FC<PokemonProps> = ({pokemon}) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <div className='pokemon' onClick={() => {setShowInfo(!showInfo)}}>
            <span className="pokemonBadge">#{pokemon.id}</span>
            {showInfo
                ? <PokemonInfo weight={pokemon.weight} height={pokemon.height}/>
                : <>
                    <img src={pokemon.image} alt={pokemon.name + "_image"} className="pokemonImg" />
                    <span className="pokemonName">Name: {pokemon.name}</span>
                    <span className="pokemonType">Type: {pokemon.type}</span>
                </>
            }
        </div>
    )
}
