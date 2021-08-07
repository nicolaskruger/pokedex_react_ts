import { PokedexAction } from "../pokedex.action";
import { PokedexReducerState } from "../pokedex.state";

type PokedexFunction = (state: PokedexReducerState, action: PokedexAction) => PokedexReducerState;


export type { PokedexFunction }