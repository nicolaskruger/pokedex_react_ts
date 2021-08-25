import { PokemonDomain } from "../../../domain";
import { MAX_LIFE } from "../const";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const setEnemy = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const pokemon: PokemonDomain = {
        ...action.newPokemon as PokemonDomain,
        life: MAX_LIFE
    };
    return {
        ...state,
        enemy: pokemon
    }

}

export {
    setEnemy
}
