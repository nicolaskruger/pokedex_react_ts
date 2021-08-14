import { PokeListDto } from "../../dtos"
import { POKEDEX_TYPE } from "./pokedex.type"

type PokedexAction = {
    type: POKEDEX_TYPE,
    pokedex?: PokeListDto
}

export type { PokedexAction }