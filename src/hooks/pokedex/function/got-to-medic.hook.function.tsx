import { PokemonDomain } from "../../../domain"
import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useGoToMedic = () => {
    return (pokemon: PokemonDomain) => {
        store.dispatch({
            type: POKEDEX_TYPE.GOT_TO_MEDIC,
            newPokemon: pokemon
        })
    }
}

export { useGoToMedic }