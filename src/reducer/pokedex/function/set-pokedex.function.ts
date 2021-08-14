import { PokeListDto } from "../../../dtos";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const setPokedex = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const pokedex = action.pokedex as PokeListDto;

    return {
        ...state,
        pokedex
    }
}

export { setPokedex }