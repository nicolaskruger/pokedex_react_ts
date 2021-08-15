import { store } from "../../../store";
import { useSetPokedex } from "./set-pokedex.hook.function"

const useNextPokedex = () => {
    const find = useSetPokedex();

    const { next } = store.getState().pokedex;

    return async () => {
        await find(next);
    }
}

export { useNextPokedex }