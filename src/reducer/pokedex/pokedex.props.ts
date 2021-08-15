import { PokedexReducerState } from "./pokedex.state";

const pokedexProps = (state: PokedexReducerState) => ({
    pokedex: state.pokedex
})

export { pokedexProps }