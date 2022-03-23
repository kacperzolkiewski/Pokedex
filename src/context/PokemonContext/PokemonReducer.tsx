import { IPokemon } from "../../interfaces/pokemon_interface";
import { IState } from "./PokemonContext";

export enum ActionType {
    Start = 'FETCHING_START',
    Success = 'FETCHING_SUCCESS',
    Failure = 'FETCHING_FAILURE',
    Add = 'ADD_POKEMONS',
    FilterName = 'FILTER_NAME',
    FilterType = "FILTER_TYPE"
}

type Action =
    | { type: ActionType.Start }
    | { type: ActionType.Success, payload: IPokemon[] }
    | { type: ActionType.Failure, payload: Error }
    | { type: ActionType.Add, payload: IPokemon[] }
    | { type: ActionType.FilterName, payload: string }
    | { type: ActionType.FilterType, payload: string }

export const PokemonReducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case ActionType.Start:
            return {
                ...state,
                isFetching: true
            }
        case ActionType.Success:
            return {
                ...state,
                isFetching: false,
                pokemons: action.payload
            }
        case ActionType.Failure:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ActionType.Add:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload]
            }
        case ActionType.FilterName:
            return {
                ...state,
                pokemons: state.pokemons.filter((p) => p.name === action.payload)
            }
        case ActionType.FilterType:
            return {
                ...state,
                pokemons: state.pokemons.filter((p) => p.type === action.payload)
            }
        default:
            return state;
    }
}