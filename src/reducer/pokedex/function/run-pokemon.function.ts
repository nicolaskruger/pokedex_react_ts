import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const run = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    return (
        {
            ...state,
            battle: false,
            currPokemon: {
                ...state.currPokemon,
                life: Math.trunc((state.currPokemon.life as number) / 2)
            }
        }
    )
}

export { run }