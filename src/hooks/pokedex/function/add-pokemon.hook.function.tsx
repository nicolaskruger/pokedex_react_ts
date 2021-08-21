import { PokemonDomain } from "../../../domain"
import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useAddPokemon = () => {
    return (pokemon: PokemonDomain) => {

        const { ADD_POKEMON } = POKEDEX_TYPE;

        store.dispatch({
            type: ADD_POKEMON,
            newPokemon: pokemon
        })
    }
}

export { useAddPokemon }