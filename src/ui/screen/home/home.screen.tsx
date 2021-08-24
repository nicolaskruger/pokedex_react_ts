import { PokedexComponent } from "../../components";
import "./home.screen.css";
import { TownSection } from "./section";


const HomeScreen = () => {
    return (
        <div className="home">
            <TownSection />
            <PokedexComponent />
        </div>
    )
}

export { HomeScreen }