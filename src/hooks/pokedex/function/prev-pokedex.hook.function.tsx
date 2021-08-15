import { store } from "../../../store";
import { useSetPokedex } from "./set-pokedex.hook.function"

const usePrevPokedex = () => {
    const find = useSetPokedex();

    const { previous: previus } = store.getState().pokedex;

    return async () => {
        await find(previus);
    }
}

export { usePrevPokedex }