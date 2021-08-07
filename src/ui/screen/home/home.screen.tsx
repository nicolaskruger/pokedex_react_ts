import { Link } from "react-router-dom";
import { ROUTES_ENUM } from "../../../emun";
import { PokedexComponent } from "../../components";
import "./home.screen.css";

const { BATTLE, MEDIC } = ROUTES_ENUM;

const HomeScreen = () => {
    return (
        <div className="home">

            <div>
                <Link to={MEDIC}>
                    medic
                </Link>
                <Link to={BATTLE}>
                    battle
                </Link>
            </div>
            <PokedexComponent />
        </div>
    )
}

export { HomeScreen }