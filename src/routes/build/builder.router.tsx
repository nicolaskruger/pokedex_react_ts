import { Route, Redirect } from "react-router-dom";
import { ROUTES_ENUM } from "../../emun";
import { BattleScreen, HomeScreen, MedicScreen } from "../../ui/screen";

const { BATTLE, HOME, MEDIC } = ROUTES_ENUM;

type RouteBuild = {
    path: string,
    exact: boolean,
    compoment: React.FunctionComponent
}

const HomeRedirect = () => {
    return <Redirect to={HOME} />
}

const RouterBuilder = () => {
    const builder: RouteBuild[] = [
        {
            path: BATTLE,
            exact: true,
            compoment: BattleScreen
        },
        {
            path: MEDIC,
            exact: true,
            compoment: MedicScreen
        },
        {
            path: HOME,
            exact: true,
            compoment: HomeScreen
        },
        {
            path: "/",
            exact: false,
            compoment: HomeRedirect
        }
    ]

    return (
        <>
            {
                builder.map(({ compoment, exact, path }, index) => (
                    <Route key={index} component={compoment} exact={exact} path={path} />
                )
                )
            }
        </>
    )
}

export { RouterBuilder }