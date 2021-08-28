import { POKEDEX_TYPE } from "../../../reducer"
import { store } from "../../../store"

const useCapture = () => {
    return () => {
        store.dispatch({
            type: POKEDEX_TYPE.CAPTURE
        })
    }
}

export { useCapture }