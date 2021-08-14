import { useSetPokedex } from "./function"

const usePokedex = () => {
    const setPokedex = useSetPokedex();

    return {
        setPokedex
    }
}

export { usePokedex }