import { PokemonDomain } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const run = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {

    const currPokemon = state.currPokemon as PokemonDomain;

    return (
        {
            ...state,
            battle: false,
            currPokemon: {
                ...currPokemon,
                life: Math.trunc((currPokemon.life as number) / 2)
            }
        }
    )
}

export { run }