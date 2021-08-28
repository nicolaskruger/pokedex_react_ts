import { PokedexReducerState } from "./pokedex.state";

const pokedexProps = (state: PokedexReducerState) => ({
    pokedex: state.pokedex,
    pokeList: state.pokeList,
    currPokemon: state.currPokemon,
    battle: state.battle,
    enemy: state.enemy,
    launch: state.launch,
    medic: state.medic
})

export { pokedexProps }