import { addPokemon, allyAtack, run, selectPokemon, setEnemy, setPokedex, startBattle } from "./function";
import { enemyAtack } from "./function/enemy-atack.function";
import { PokedexAction } from "./pokedex.action";
import { PokedexReducerState } from "./pokedex.state";
import { POKEDEX_TYPE } from "./pokedex.type";

const pokedexReducer = (state: PokedexReducerState | undefined, action: PokedexAction): PokedexReducerState => {


    const realState = state as PokedexReducerState;

    const { START_BATTLE,
        SET_POKEDEX,
        ADD_POKEMON,
        SET_CURR_POKEMON,
        SET_ENEMY,
        ALLY_ATACK,
        ENEMY_ATACK,
        RUN
    } = POKEDEX_TYPE;

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
        case ALLY_ATACK:
            return allyAtack(realState, action);
        case ENEMY_ATACK:
            return enemyAtack(realState, action);
        case START_BATTLE:
            return startBattle(realState, action);
        case RUN:
            return run(realState, action);
        default:
            return { ...realState }
    }

}

export { pokedexReducer }