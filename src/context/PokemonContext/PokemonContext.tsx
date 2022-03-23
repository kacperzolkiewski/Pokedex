import React, { createContext, useReducer } from "react";
import { IPokemon } from "../../interfaces/pokemon_interface";
import { PokemonReducer } from "./PokemonReducer";

export interface IState {
    pokemons: IPokemon[];
    isFetching: boolean;
    error: Error | null;
}

const INITIAL_STATE: IState = {
    pokemons: [],
    isFetching: false,
    error: null
}

export const PokemonContext = createContext<{
    state: IState,
    dispatch: React.Dispatch<any>
}>({
    state: INITIAL_STATE,
    dispatch: () => null
});

interface Props {
    children: React.ReactNode;
}

export const PokemonProvider = (props: Props) => {
    const [state, dispatch] = useReducer(PokemonReducer, INITIAL_STATE);

    return (
        <PokemonContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PokemonContext.Provider>
    )
}