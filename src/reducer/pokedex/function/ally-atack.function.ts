import { PokemonDomain, POKEMON_STATE } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";
import { atack } from "./atack.function";
import { endBattleCondition } from "./end-battle-condition.function";

const allyAtack = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {

    if (!state.battle) {
        return {
            ...state
        }
    }

    const damage = action.damage as number;

    return endBattleCondition({
        ...state,
        currPokemon: {
            ...state.currPokemon as PokemonDomain,
            state: POKEMON_STATE.DEFAULT
        },
        enemy: atack(damage, state.enemy as PokemonDomain)
    })
}

export { allyAtack }