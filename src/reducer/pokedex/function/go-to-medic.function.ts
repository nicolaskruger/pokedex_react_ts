import { PokemonDomain } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const goToMedic = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {

    const pokemon = action.newPokemon as PokemonDomain;

    if (pokemon.life === pokemon.base_experience) {
        return {
            ...state
        }
    }

    const date = new Date();
    date.setSeconds(date.getSeconds() + Math.trunc((pokemon.life as number) / pokemon.base_experience * 5))

    const newPokemon: PokemonDomain = {
        ...action.newPokemon as PokemonDomain,
        timeToRecover: date
    };

    const pokeList = state.pokeList.filter(pokemon => pokemon.id !== newPokemon?.id);

    const medic = [...state.medic, newPokemon];

    return {
        ...state,
        medic,
        pokeList,
    }
}

export { goToMedic }