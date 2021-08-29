import { PokemonDomain } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const run = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {

    const currPokemon: PokemonDomain = {
        ...(state.currPokemon as PokemonDomain),
        life: Math.trunc(state.currPokemon.life as number / 2)
    };

    const pokeList = state.pokeList.map(poke => {
        if (poke.id === currPokemon.id)
            return currPokemon;
        return poke
    })

    return (
        {
            ...state,
            battle: false,
            currPokemon: {
                ...currPokemon,
                life: Math.trunc((currPokemon.life as number) / 2)
            },
            pokeList
        }
    )
}

export { run }