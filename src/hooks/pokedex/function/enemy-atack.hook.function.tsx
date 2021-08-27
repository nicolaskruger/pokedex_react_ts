import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useEnemyAtack = () => {

    return () => {
        store.dispatch({
            type: POKEDEX_TYPE.ENEMY_ATACK
        })
    }
}

export { useEnemyAtack }