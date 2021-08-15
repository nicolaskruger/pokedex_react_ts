import { PokeListDto, PokemonDto } from "../../dtos"

type PokedexReducerState = {
    pokedex: PokeListDto
}

const results: PokemonDto[] = []

const InithialState: PokedexReducerState = {
    pokedex: {
        count: 0,
        next: "",
        previous: "",
        results
    }
}

export type { PokedexReducerState }
export { InithialState }