import { POKEMON_STATE } from "../../../domain";
import { PokedexReducerState } from "../pokedex.state";

const endBattleCondition = (state: PokedexReducerState): PokedexReducerState => {

    const battle = state.enemy?.life !== 0 && state.currPokemon?.life !== 0;

    if (!battle) {
        return {
            ...state,
            battle,
            launch: false,
            pokeList: state.pokeList.map(pokemon => {
                if (pokemon.id === state.currPokemon.id)
                    return {
                        ...state.currPokemon,
                        state: POKEMON_STATE.DEFAULT
                    }
                return {
                    ...pokemon
                }
            })
        }
    }

    return {
        ...state,
        battle,
        launch: false
    }
}

export { endBattleCondition }