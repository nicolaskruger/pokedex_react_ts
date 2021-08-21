import { PokedexReducerState } from "./pokedex.state";

const pokedexProps = (state: PokedexReducerState) => ({
    pokedex: state.pokedex,
    pokeList: state.pokeList
})

export { pokedexProps }