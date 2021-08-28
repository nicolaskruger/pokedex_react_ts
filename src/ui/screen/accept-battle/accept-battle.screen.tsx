import { PokedexComponent } from "../../components";
import "./accept-battle.screen.css";
import { AcceptBattleSection } from "./section";

const AcceptBattleScreen = () => {



    return (
        <div className="accept-battle">
            <AcceptBattleSection />
            <PokedexComponent />
        </div>
    )
}

export { AcceptBattleScreen }