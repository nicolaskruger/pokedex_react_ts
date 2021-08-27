import { PokedexReducerState } from "../pokedex.state";

const endBattleCondition = (state: PokedexReducerState): PokedexReducerState => {
    return {
        ...state,
        battle: state.enemy.life !== 0 && state.currPokemon.life !== 0
    }
}

export { endBattleCondition }