import { POKEMON_STATE } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";
import { atack } from "./atack.function";
import { endBattleCondition } from "./end-battle-condition.function";

const enemyAtack = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {

    const damage = Math.trunc(Math.random() * state.enemy.base_experience / 2);

    if (!state.battle) {
        return {
            ...state
        }
    }


    return endBattleCondition({
        ...state,
        enemy: {
            ...state.enemy,
            state: POKEMON_STATE.DEFAULT
        },
        currPokemon: atack(damage, state.currPokemon)
    })
}

export { enemyAtack }