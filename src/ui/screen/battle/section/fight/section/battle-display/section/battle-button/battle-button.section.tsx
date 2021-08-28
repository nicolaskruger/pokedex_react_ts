import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES_ENUM } from "../../../../../../../../../emun";
import { usePokedex } from "../../../../../../../../../hooks";
import "./battle-button.section.css";

type BattleButtonProps = {
    onClickFight: () => void
}

const BattleButtonSection = (props: BattleButtonProps) => {

    const { onClickFight } = props;

    const [disable, setDisable] = useState(false);

    const pokedex = usePokedex();
    const history = useHistory();

    const handleRun = () => {
        pokedex.run();
        history.push(ROUTES_ENUM.HOME)
    }

    const handleCapture = () => {
        setDisable(true);
        pokedex.capture();
        setTimeout(() => {
            pokedex.enemyAtack();
            setDisable(false);
        }, 4000);
    }

    return (
        <div className="battle-button">
            <button disabled={disable} onClick={onClickFight} className="battle-button__button battle-button__button-blue">
                fight
            </button>
            <button disabled={disable} onClick={handleCapture} className="battle-button__button battle-button__button-red">
                capture
            </button>
            <button disabled={disable} onClick={handleRun} className="battle-button__button battle-button__button-orange">
                run
            </button>
        </div>
    )
}

export { BattleButtonSection }