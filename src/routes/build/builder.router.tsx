import { FC } from "react";
import { Redirect, RouteProps } from "react-router-dom";
import { ROUTES_ENUM } from "../../emun";
import { BattleScreen, HomeScreen, InithialPokemonScreen, MedicScreen } from "../../ui/screen";
import { WithPokemonRoute } from "../custom/with-pokemon.route";
import { WithOutPokemonRoute } from "../custom/without-pokemon.route";

const { BATTLE, HOME, MEDIC, INITHIAL_POKEMON } = ROUTES_ENUM;

type RouteBuild = {
    path: string,
    exact: boolean,
    compoment: React.FunctionComponent
    CustomRoute: FC<RouteProps>
}

const HomeRedirect = () => {
    return <Redirect to={HOME} />
}

const RouterBuilder = () => {
    const builder: RouteBuild[] = [
        {
            path: BATTLE,
            exact: true,
            compoment: BattleScreen,
            CustomRoute: WithPokemonRoute
        },
        {
            path: MEDIC,
            exact: true,
            compoment: MedicScreen,
            CustomRoute: WithPokemonRoute
        },
        {
            path: HOME,
            exact: true,
            compoment: HomeScreen,
            CustomRoute: WithPokemonRoute
        },
        {
            path: INITHIAL_POKEMON,
            exact: true,
            compoment: InithialPokemonScreen,
            CustomRoute: WithOutPokemonRoute
        },
        {
            path: "/",
            exact: false,
            compoment: HomeRedirect,
            CustomRoute: WithPokemonRoute
        }
    ]

    return (
        <>
            {
                builder.map(({ compoment, exact, path, CustomRoute }, index) => (
                    <CustomRoute key={index} component={compoment} exact={exact} path={path} />
                )
                )
            }
        </>
    )
}

export { RouterBuilder }