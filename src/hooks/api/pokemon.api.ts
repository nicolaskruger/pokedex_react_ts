import { PokemonDomain } from "../../domain/pokemon.domain";
import { ROUTES_BACKEND_ENUM } from "../../emun/routes/routes-backend.enum";
import { usePokedexApi } from "./pokedex.api"
import { AxiosResponse } from "axios"
import { PokeListDto } from "../../dtos";
import axios from "axios";

type QueryPokemon = {
    offset: number,
    limit: number
}

const usePokemonApi = () => {
    const instance = usePokedexApi();

    const { POKEMON, POKEMON_NUM } = ROUTES_BACKEND_ENUM;

    const page = async (query: QueryPokemon): Promise<PokeListDto> => {
        const response: AxiosResponse<PokeListDto> = await instance.get(POKEMON, {
            params: {
                ...query
            }
        })
        return response.data;
    }

    const getPokemonById = async (id: number): Promise<PokemonDomain> => {
        const response: AxiosResponse<PokemonDomain> = await instance.get(POKEMON_NUM(id));

        return response.data;
    }


    const pageUrl = async (url: string): Promise<PokeListDto> => {
        const response: AxiosResponse<PokeListDto> = await axios.get(url);

        return response.data;
    }

    const pokemonUrl = async (url: string): Promise<PokemonDomain> => {
        const response: AxiosResponse<PokemonDomain> = await axios.get(url);

        return response.data;
    }


    return {
        page,
        pageUrl,
        pokemonUrl,
        getPokemonById
    }

}

export { usePokemonApi }