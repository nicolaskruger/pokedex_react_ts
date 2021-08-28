import { PokemonDomain, POKEMON_STATE } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";
import { atack } from "./atack.function";
import { endBattleCondition } from "./end-battle-condition.function";

const enemyAtack = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {

    const enemy = state.enemy as PokemonDomain;

    const damage = Math.trunc(Math.random() * enemy.base_experience / 2);

    if (!state.battle) {
        return {
            ...state,
            launch: false
        }
    }


    return endBattleCondition({
        ...state,
        enemy: {
            ...enemy,
            state: POKEMON_STATE.DEFAULT
        },
        currPokemon: atack(damage, state.currPokemon as PokemonDomain)
    })
}

export { enemyAtack }