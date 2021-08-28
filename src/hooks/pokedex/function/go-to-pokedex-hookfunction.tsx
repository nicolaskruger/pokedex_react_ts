import { PokemonDomain } from "../../../domain"
import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useGoToPokedex = () => {
    return (pokemon: PokemonDomain) => {
        store.dispatch({
            type: POKEDEX_TYPE.GO_TO_POKEDEX,
            newPokemon: pokemon
        })
    }
}

export { useGoToPokedex }