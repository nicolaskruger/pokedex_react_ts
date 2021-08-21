import { usePokemonApi } from "../../api/pokemon.api"

const useGetInithislPokemons = () => {

    const pokemonApi = usePokemonApi();


    return async () => {
        const pokemonUrl = [
            "https://pokeapi.co/api/v2/pokemon/1/",
            "https://pokeapi.co/api/v2/pokemon/4/",
            "https://pokeapi.co/api/v2/pokemon/7/"
        ];

        const promise = await pokemonUrl.map(async (url) => await pokemonApi.pokemonUrl(url))

        return await Promise.all(promise);
    }
}

export { useGetInithislPokemons }