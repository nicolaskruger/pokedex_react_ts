import { useNextPokedex, useSetPokedex } from "./function"
import { usePrevPokedex } from "./function/prev-pokedex.hook.function";

const usePokedex = () => {

    const setPokedex = useSetPokedex();

    const nextPokedex = useNextPokedex();

    const prevPokedex = usePrevPokedex();

    return {
        setPokedex,
        prevPokedex,
        nextPokedex
    }
}

export { usePokedex }