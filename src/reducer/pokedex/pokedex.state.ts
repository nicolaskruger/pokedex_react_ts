import { PokeListDto } from "../../dtos"

type PokedexReducerState = {
    pokedex: PokeListDto
}

const InithialState: PokedexReducerState = {
    pokedex: {
        count: 0,
        next: "",
        previus: "",
        result: []
    }
}

export type { PokedexReducerState }
export { InithialState }