import { POKEDEX_TYPE } from "../../../reducer";
import { store } from "../../../store";
import { usePokemonApi } from "../../api/pokemon.api"

const useSetEnemy = () => {

    const api = usePokemonApi();

    return async () => {
        const nextId = Math.trunc(1 + Math.random() * 1118)

        const enemy = await api.getPokemonById(nextId);

        return store.dispatch({
            type: POKEDEX_TYPE.SET_ENEMY,
            newPokemon: enemy
        })
    }
}

export { useSetEnemy }