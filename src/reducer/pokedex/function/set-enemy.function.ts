import { PokemonDomain, POKEMON_STATE } from "../../../domain";
import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

const setEnemy = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    const pokemon: PokemonDomain = {
        ...action.newPokemon as PokemonDomain,
        life: action.newPokemon?.base_experience,
        state: POKEMON_STATE.DEFAULT
    };
    return {
        ...state,
        enemy: pokemon
    }

}

export {
    setEnemy
}
