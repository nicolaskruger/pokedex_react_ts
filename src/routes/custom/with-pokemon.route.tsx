import { FC } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { ROUTES_ENUM } from "../../emun"
import { store } from "../../store"

const WithPokemonRoute: FC<RouteProps> = (props) => {

    const poke = store.getState();

    if (poke.pokeList.length === 0)
        return <Redirect to={ROUTES_ENUM.INITHIAL_POKEMON} />
    return <Route {...props} />
}

export { WithPokemonRoute };