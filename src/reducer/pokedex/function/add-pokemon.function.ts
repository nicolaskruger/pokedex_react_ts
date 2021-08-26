import { PokemonDomain, POKEMON_STATE } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const addPokemon = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const pokemon: PokemonDomain = {
        ...action.newPokemon as PokemonDomain,
        life: action.newPokemon?.base_experience,
        id: Math.random(),
        state: POKEMON_STATE.DEFAULT
    };

    return {
        ...state,
        pokeList: [...state.pokeList, pokemon]
    }
}

export { addPokemon }