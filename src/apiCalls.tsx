import React from "react"
import { ActionType } from "./context/PokemonContext/PokemonReducer"
import { IPokemon } from "./interfaces/pokemon_interface";

const url = "https://pokeapi.co/api/v2/pokemon/";
let numOfPokemons: number = 21;

export const fetchPokemons = async (dispatch: React.Dispatch<any>) => {
    dispatch({type: ActionType.Start});
    try {
        const pokemons: IPokemon[] = []
        for (let i = 1; i < numOfPokemons; i++) {
            const res: Response = await fetch(url + i);
            const data: any = await res.json();

            const pokemon: IPokemon = {
                id: data.id,
                name: data.name,
                type: data.types[0].type.name,
                image: data.sprites.back_default,
                weight: data.weight,
                height: data.height
            }

            pokemons.push(pokemon);
        }
        dispatch({type: ActionType.Success, payload: pokemons});
    } catch (err) {
        dispatch({type: ActionType.Failure, payload: err});
    }
}

export const addPokemons = async (dispatch: React.Dispatch<any>) => {
    try {
        const pokemons: IPokemon[] = []
        for (let i = numOfPokemons; i < numOfPokemons + 5; i++) {
            const res: Response = await fetch(url + i);
            const data: any = await res.json();

            const pokemon: IPokemon = {
                id: data.id,
                name: data.name,
                type: data.types[0].type.name,
                image: data.sprites.back_default,
                weight: data.weight,
                height: data.height
            }

            pokemons.push(pokemon);
        }
        numOfPokemons += 5;
        dispatch({type: ActionType.Add, payload: pokemons});
    } catch (err) {
        console.log(err);
    }
}