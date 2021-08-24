import { PokemonDomain } from "../../domain";
import { PokeListDto, PokemonDto } from "../../dtos"
import { getLocalStorage, LOCAL_STORAGE_KEYS } from "../../util";

type PokedexReducerState = {
    pokedex: PokeListDto,
    pokeList: PokemonDomain[],
    currPokemon: PokemonDomain,
    battle: boolean
}

const results: PokemonDto[] = []

const InithialState: PokedexReducerState =
    getLocalStorage(LOCAL_STORAGE_KEYS.POKEDEX)
    || {
        pokedex: {
            count: 0,
            next: "",
            previous: "",
            results
        },
        pokeList: [],
        currPokemon: null,
        battle: false
    };

export type { PokedexReducerState }
export { InithialState }