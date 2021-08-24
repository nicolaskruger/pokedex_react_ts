import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { arenaImg, joyImg } from "../../../../../assets"
import { ROUTES_ENUM } from "../../../../../emun";
import { useMsgTime } from "../../../../../hooks";
import { pokedexProps } from "../../../../../reducer";
import { CardPlaceSection } from "../card/card-place.section"
import { InfoSection, TrainerSection, TRAINER_STATE } from "./section";
import "./town.section.css";

const connector = connect(pokedexProps, {})

type Props = ConnectedProps<typeof connector>;


const TownS = (props: Props) => {

    const { currPokemon } = props;

    const history = useHistory();

    const [currState, setCurrState] = useState(TRAINER_STATE.IDLE);

    const msg = useMsgTime(3000);

    const handleClickArena = () => {

        if (currPokemon == null) {
            msg.send("you need to select a pokemon go to pokelist and select one");
            return;
        }
        if (currPokemon.life === 0) {
            msg.send("you pokemon need to be heath to go to battle");
            return;
        }

        setCurrState(TRAINER_STATE.ARENA)

        setTimeout(() => {
            history.push(ROUTES_ENUM.ACCEPT_BATTLE);
        }, 2000);

    }

    const handleClickMedic = () => {
        setCurrState(TRAINER_STATE.MEDIC)
    }

    return (
        <div className="town">
            <InfoSection msg={msg} />
            <nav className="town__nav">
                <CardPlaceSection name={"battle"} src={arenaImg} onClick={handleClickArena} />
                <CardPlaceSection name={"medic"} src={joyImg} onClick={handleClickMedic} />
            </nav>
            <TrainerSection currState={currState} />
        </div>
    )
}

const TownSection = connector(TownS);

export { TownSection }