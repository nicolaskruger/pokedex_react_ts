import { PokemonDomain } from "../domain";
import { PokemonDto } from "./pokemon.dto";

type PokeListDto = {
    count: number,
    next: string,
    previous: string,
    results: PokemonDto[],
    resultDetail?: PokemonDomain[]
}

export type { PokeListDto }