import { PokemonDto } from "./pokemon.dto";

type PokeListDto = {
    count: number,
    next: string,
    previus: string,
    result: PokemonDto[]
}

export type { PokeListDto }