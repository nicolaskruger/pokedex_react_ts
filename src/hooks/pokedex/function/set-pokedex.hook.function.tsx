import { PokeListDto } from "../../../dtos";
import { POKEDEX_TYPE } from "../../../reducer/pokedex/pokedex.type";
import { store } from "../../../store";
import { useLoader } from "../../api-handler/loader/loader.hook";
import { usePokemonApi } from "../../api/pokemon.api";

const useSetPokedex = () => {

    const pokemonApi = usePokemonApi();
    const loader = useLoader();

    return async (url = "") => {
        let pokeList: PokeListDto;

        loader.showLoader();


        if (url === "") {
            pokeList = await pokemonApi.page({ limit: 6, offset: 0 })
        }
        else
            pokeList = await pokemonApi.pageUrl(url);

        const { SET_POKEDEX } = POKEDEX_TYPE;

        const promise = await pokeList.results
            .map(async pokemon => await pokemonApi.pokemonUrl(pokemon.url))

        const resultDetail = await Promise.all(promise)

        loader.hideLoader();

        store.dispatch({
            type: SET_POKEDEX,
            pokedex: { ...pokeList, resultDetail },
        })

    }
}

export { useSetPokedex }