import { addPokemon, selectPokemon, setEnemy, setPokedex } from "./function";
import { PokedexAction } from "./pokedex.action";
import { PokedexReducerState } from "./pokedex.state";
import { POKEDEX_TYPE } from "./pokedex.type";

const pokedexReducer = (state: PokedexReducerState | undefined, action: PokedexAction): PokedexReducerState => {


    const realState = state as PokedexReducerState;

    const { SET_POKEDEX, ADD_POKEMON, SET_CURR_POKEMON, SET_ENEMY } = POKEDEX_TYPE;

    const { type } = action;


    switch (type) {
        case SET_POKEDEX:
            return setPokedex(realState, action);
        case ADD_POKEMON:
            return addPokemon(realState, action);
        case SET_CURR_POKEMON:
            return selectPokemon(realState, action);
        case SET_ENEMY:
            return setEnemy(realState, action);
        default:
            return { ...realState }
    }

}

export { pokedexReducer }