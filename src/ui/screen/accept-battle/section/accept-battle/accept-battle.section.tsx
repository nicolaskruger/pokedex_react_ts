import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux"
import { useHistory } from "react-router-dom";
import { ROUTES_ENUM } from "../../../../../emun";
import { usePokedex } from "../../../../../hooks";
import { pokedexProps } from "../../../../../reducer";
import "./accept-battle.section.css";

const connector = connect(pokedexProps, {});

type Props = ConnectedProps<typeof connector>

const AcceptBattleS = (props: Props) => {

    const pokedex = usePokedex();

    const history = useHistory();

    useEffect(() => {
        pokedex.setEnemy();
    }, [])

    const handleRun = () => {
        history.push(ROUTES_ENUM.HOME);
    }

    const handleBattle = () => {
        history.push(ROUTES_ENUM.BATTLE);
    }

    return (
        <div className="accept-baltle-s">
            <img className="accept-baltle-s__img" src={props.enemy.sprites.front_default} alt="" />

            <div className="accept-batle-s__button-warper">
                <button onClick={handleRun} className="accept-baltle-s__button accept-baltle-s__button-run">
                    run
                </button>
                <button onClick={handleBattle} className="accept-baltle-s__button">
                    fight
                </button>
            </div>
        </div>
    )
}

const AcceptBattleSection = connector(AcceptBattleS);

export { AcceptBattleSection }