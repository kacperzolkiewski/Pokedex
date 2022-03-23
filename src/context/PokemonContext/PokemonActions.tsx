import { IPokemon } from "../../interfaces/pokemon_interface"
import { ActionType } from "./PokemonReducer"

export const FetchingStart = () => ({
    type: ActionType.Start
})

export const FetchingSuccess = (pokemons: IPokemon[]) => ({
    type: ActionType.Success,
    payload: pokemons
})

export const FetchingFailure = (error: Error) => ({
    type: ActionType.Failure,
    payload: error
})

export const AddPokemons = (newPokemons: IPokemon[]) => ({
    type: ActionType.Add,
    payload: newPokemons
})

export const FilterByName = (name: string) => ({
    type: ActionType.FilterName,
    payload: name
})

export const FilterByType = (type: string) => ({
    type: ActionType.FilterName,
    payload: type
})