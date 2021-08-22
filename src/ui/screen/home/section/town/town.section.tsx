import { useState } from "react";
import { arenaImg, joyImg } from "../../../../../assets"
import { CardPlaceSection } from "../card/card-place.section"
import { TrainerSection, TRAINER_STATE } from "./section";
import "./town.section.css";

const TownSection = () => {

    const [currState, setCurrState] = useState(TRAINER_STATE.IDLE);

    const handleClickArena = () => {
        setCurrState(TRAINER_STATE.ARENA)
    }

    const handleClickMedic = () => {
        setCurrState(TRAINER_STATE.MEDIC)
    }

    return (
        <div className="town">
            <nav className="town__nav">
                <CardPlaceSection name={"battle"} src={arenaImg} onClick={handleClickArena} />
                <CardPlaceSection name={"medic"} src={joyImg} onClick={handleClickMedic} />
            </nav>
            <TrainerSection currState={currState} />
        </div>
    )
}

export { TownSection }