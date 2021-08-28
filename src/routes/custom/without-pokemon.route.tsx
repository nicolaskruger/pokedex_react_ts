import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { ROUTES_ENUM } from "../../emun";
import { store } from "../../store";

const WithOutPokemonRoute: FC<RouteProps> = (props) => {

    if (store.getState().pokeList.length > 0 && store.getState().medic.length > 0)
        return <Redirect to={ROUTES_ENUM.HOME} />

    return <Route {...props} />
}

export { WithOutPokemonRoute }