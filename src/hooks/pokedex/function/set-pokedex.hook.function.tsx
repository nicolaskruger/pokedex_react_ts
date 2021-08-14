import { PokeListDto } from "../../../dtos";
import { usePokemonApi } from "../../api/pokemon.api";

const useSetPokedex = () => {

    const pokemonApi = usePokemonApi();

    return async (url = "") => {
        let pokeList: PokeListDto;
        if (url)
            pokeList = await pokemonApi.page({ limit: 6, offset: 0 })
        else
            pokeList = await pokemonApi.pageUrl("url");

    }
}

export { useSetPokedex }