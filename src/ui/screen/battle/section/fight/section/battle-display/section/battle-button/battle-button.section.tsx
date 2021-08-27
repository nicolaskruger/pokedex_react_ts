import { useHistory } from "react-router-dom";
import { ROUTES_ENUM } from "../../../../../../../../../emun";
import { usePokedex } from "../../../../../../../../../hooks";
import "./battle-button.section.css";

type BattleButtonProps = {
    onClickFight: () => void
}

const BattleButtonSection = (props: BattleButtonProps) => {

    const { onClickFight } = props;

    const pokedex = usePokedex();
    const history = useHistory();

    const handleRun = () => {
        pokedex.run();
        history.push(ROUTES_ENUM.HOME)
    }

    return (
        <div className="battle-button">
            <button onClick={onClickFight} className="battle-button__button battle-button__button-blue">
                fight
            </button>
            <button className="battle-button__button battle-button__button-red">
                capture
            </button>
            <button onClick={handleRun} className="battle-button__button battle-button__button-orange">
                run
            </button>
        </div>
    )
}

export { BattleButtonSection }