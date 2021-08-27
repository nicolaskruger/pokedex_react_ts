import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useStartBattle = () => {
    return () => {
        store.dispatch({
            type: POKEDEX_TYPE.START_BATTLE
        })
    }
}

export { useStartBattle }