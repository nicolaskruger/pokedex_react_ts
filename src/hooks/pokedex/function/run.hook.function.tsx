import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useRun = () => {
    return () => {
        store.dispatch({
            type: POKEDEX_TYPE.RUN
        })
    }
}

export { useRun }