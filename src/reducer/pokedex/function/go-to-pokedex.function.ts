import { PokemonDomain } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const goToPokedex = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {


    if (new Date() > new Date(action.newPokemon?.timeToRecover as Date)) {
        return {
            ...state
        }
    }


    const pokemon: PokemonDomain = {
        ...action.newPokemon as PokemonDomain,
        life: action.newPokemon?.base_experience,
        timeToRecover: undefined
    }

    const pokeList = [...state.pokeList, pokemon];
    const medic = state.medic.filter(pok => pok.id !== pokemon.id)

    return {
        ...state,
        medic,
        pokeList,
        currPokemon: pokemon
    }
}

export { goToPokedex }