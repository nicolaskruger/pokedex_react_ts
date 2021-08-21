import { PokemonDomain } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const addPokemon = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const pokemon: PokemonDomain = {
        ...action.newPokemon as PokemonDomain,
        life: 100
    };

    return {
        ...state,
        pokeList: [...state.pokeList, pokemon]
    }
}

export { addPokemon }