import { PokemonDomain } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const selectPokemon = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const pokemon: PokemonDomain = action.newPokemon as PokemonDomain;

    if (pokemon.life as number <= 0) {
        throw new Error("pokemon life need to be bigger then 0")
    }

    return {
        ...state,
        currPokemon: pokemon
    }
}

export { selectPokemon }