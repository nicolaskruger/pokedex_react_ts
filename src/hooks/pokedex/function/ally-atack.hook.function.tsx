import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useAllyAtack = () => {

    return (damage: number) => {
        store.dispatch({
            type: POKEDEX_TYPE.ALLY_ATACK,
            damage: damage
        })
    }

}

export { useAllyAtack }