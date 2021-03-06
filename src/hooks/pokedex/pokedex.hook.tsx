import { useAddPokemon, useNextPokedex, useSetPokedex, useSetEnemy, useAllyAtack, useEnemyAtack, useStartBattle, useRun, useCapture, useGoToMedic, useGoToPokedex } from "./function"
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

    const setEnemy = useSetEnemy();

    const allyAtack = useAllyAtack();

    const enemyAtack = useEnemyAtack();

    const startBattle = useStartBattle();

    const run = useRun();

    const capture = useCapture()

    const goToMedic = useGoToMedic();

    const goToPokedex = useGoToPokedex();

    return {
        setPokedex,
        prevPokedex,
        nextPokedex,
        getInithialPokemon,
        addPokemon,
        selectPokemon,
        setEnemy,
        allyAtack,
        enemyAtack,
        startBattle,
        run,
        capture,
        goToMedic,
        goToPokedex
    }
}

export { usePokedex }