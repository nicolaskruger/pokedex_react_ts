import { EnumDictionary } from "../../util";
import { PokedexFunction } from "./function";
import { PokedexAction } from "./pokedex.action";
import { PokedexReducerState } from "./pokedex.state";
import { POKEDEX_TYPE } from "./pokedex.type";

const pokedexReducer = (state: PokedexReducerState | undefined, action: PokedexAction): PokedexReducerState => {


    const { } = POKEDEX_TYPE;

    const dic: EnumDictionary<POKEDEX_TYPE, PokedexFunction> = {

    }

    return { ...state }
}

export { pokedexReducer }