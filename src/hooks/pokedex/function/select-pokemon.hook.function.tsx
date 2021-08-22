import { PokemonDomain } from "../../../domain"
import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useSelectPokemon = () => {

    return (pokemon: PokemonDomain) => {

        store.dispatch({
            type: POKEDEX_TYPE.SET_CURR_POKEMON,
            newPokemon: pokemon
        })
    }
}

export { useSelectPokemon }