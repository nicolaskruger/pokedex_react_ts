import { FC } from "react"
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom"
import { ROUTES_ENUM } from "../../emun"
import { store } from "../../store"

const WithPokemonRoute: FC<RouteProps> = (props) => {

    const poke = store.getState();

    const location = useLocation();

    if (poke.pokeList.length === 0 && poke.medic.length === 0)
        return <Redirect to={ROUTES_ENUM.INITHIAL_POKEMON} />
    if (poke.battle && location.pathname !== ROUTES_ENUM.BATTLE)
        return <Redirect to={ROUTES_ENUM.BATTLE} />
    return <Route {...props} />
}

export { WithPokemonRoute };