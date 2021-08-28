import { PokemonDomain, POKEMON_STATE } from "../../../domain";
import { PokedexReducerState } from "../pokedex.state";

const defListCurrPokemon = (state: PokedexReducerState): PokedexReducerState => {

    const currPokemon: PokemonDomain = {
        ...state.currPokemon,
        state: POKEMON_STATE.DEFAULT
    }

    const pokeList = state.pokeList.map(pokemon => {
        if (pokemon.id === currPokemon.id) {
            return {
                ...currPokemon
            }
        }
        return {
            ...pokemon
        }
    })

    return {
        ...state,
        currPokemon,
        pokeList
    }
}

export { defListCurrPokemon }