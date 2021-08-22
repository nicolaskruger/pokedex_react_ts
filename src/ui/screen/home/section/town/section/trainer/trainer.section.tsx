import { connect, ConnectedProps } from "react-redux"
import { pokedexProps } from "../../../../../../../reducer"
import { EnumDictionary } from "../../../../../../../util"
import trainer from "./img/trainer.png"
import "./trainer.section.css"
enum TRAINER_STATE {
    MEDIC,
    ARENA,
    IDLE
}


const connector = connect(pokedexProps, {})

type Props = ConnectedProps<typeof connector>;

interface TrainerProps extends Props {
    currState: TRAINER_STATE
}

const TrainerS = (props: TrainerProps) => {

    const { currState, currPokemon } = props;

    const {
        MEDIC,
        ARENA,
        IDLE
    } = TRAINER_STATE;

    const state: EnumDictionary<TRAINER_STATE, string> = {
        [MEDIC]: "medic",
        [ARENA]: "arena",
        [IDLE]: "idle"
    }

    const style = state[currState];

    return (
        <div className={`trainer trainer-${style}`}>
            <img className="home__img" src={trainer} alt="" />
            {currPokemon && <img className="trainer-pokemon__img" src={currPokemon.sprites.front_default} alt="" />}
        </div>
    )
}

const TrainerSection = connector(TrainerS);

export { TRAINER_STATE, TrainerSection }