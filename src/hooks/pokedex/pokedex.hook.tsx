import { useAddPokemon, useNextPokedex, useSetPokedex } from "./function"
import { usePrevPokedex } from "./function/prev-pokedex.hook.function";
import { useSelectPokemon } from "./function/select-pokemon.hook.function";
import { useGetInithislPokemons } from "./function/set-inithial-pokemons.hook.function";

const usePokedex = () => {

    const setPokedex = useSetPokedex();

    const nextPokedex = useNextPokedex();

    const prevPokedex = usePrevPokedex();

    const getInithialPokemon = useGetInithislPokemons();

    const addPokemon = useAddPokemon();

    const selectPokemon = useSelectPokemon();

    return {
        setPokedex,
        prevPokedex,
        nextPokedex,
        getInithialPokemon,
        addPokemon,
        selectPokemon
    }
}

export { usePokedex }