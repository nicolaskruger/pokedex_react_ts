import { Link } from "react-router-dom";
import { ROUTES_ENUM } from "../../../emun";
import { PokedexComponent } from "../../components";
import "./home.screen.css";
import trainer from "./img/trainer.png";
import { TownSection } from "./section";

const { BATTLE, MEDIC } = ROUTES_ENUM;

const HomeScreen = () => {
    return (
        <div className="home">
            <TownSection />
            <PokedexComponent />
        </div>
    )
}

export { HomeScreen }