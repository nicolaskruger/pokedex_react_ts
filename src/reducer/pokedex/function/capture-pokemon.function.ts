import { PokemonDomain, POKEMON_STATE } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const capture = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const enemy = state.enemy as PokemonDomain;

    if ((enemy.base_experience * Math.random()) > (enemy.life as number)) {

        const pokeList = state.pokeList.map(poke => {
            if (state.currPokemon.id === poke.id)
                return {
                    ...state.currPokemon
                }
            return {
                ...poke
            }
        })

        return {
            ...state,
            battle: false,
            launch: true,
            currPokemon: {
                ...state.currPokemon,
                state: POKEMON_STATE.DEFAULT
            },
            enemy: {
                ...enemy,
                state: POKEMON_STATE.CAPTURE
            },
            pokeList: [...pokeList, { ...state.enemy as PokemonDomain, life: state.enemy?.base_experience }]
        }
    }
    return {
        ...state,
        launch: true,
        enemy: {
            ...enemy,
            state: POKEMON_STATE.CAPTURE
        },
        currPokemon: {
            ...state.currPokemon,
            state: POKEMON_STATE.DEFAULT
        }
    }
}

export {
    capture
}