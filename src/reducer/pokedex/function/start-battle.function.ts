import { PokedexAction } from "../pokedex.action"
import { PokedexReducerState } from "../pokedex.state"

const startBattle = (state: PokedexReducerState, action: PokedexAction): PokedexReducerState => {
    return {
        ...state,
        battle: true
    }
}
export { startBattle }