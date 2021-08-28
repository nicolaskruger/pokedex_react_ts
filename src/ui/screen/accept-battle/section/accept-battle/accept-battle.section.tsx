import { useState } from "react";
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

    const [disable, setDisable] = useState(true);

    const pokedex = usePokedex();

    const history = useHistory();

    const setEnemy = async () => {
        setDisable(true);

        await pokedex.setEnemy();

        setDisable(false);
    }

    useEffect(() => {
        setEnemy();
    }, [])

    const handleRun = () => {
        history.push(ROUTES_ENUM.HOME);
    }

    const handleBattle = () => {
        history.push(ROUTES_ENUM.BATTLE);

        pokedex.startBattle();
    }

    return (
        <div className="accept-baltle-s">
            <img className="curr-pokemon" src={props.currPokemon.sprites.front_default} alt="" />
            <img className="accept-baltle-s__img" src={props.enemy?.sprites.front_default} alt="" />

            <div className="accept-batle-s__button-warper">
                <button onClick={handleRun} className="accept-baltle-s__button accept-baltle-s__button-run">
                    run
                </button>
                <button disabled={disable} onClick={handleBattle} className="accept-baltle-s__button">
                    fight
                </button>
            </div>

        </div>
    )
}

const AcceptBattleSection = connector(AcceptBattleS);

export { AcceptBattleSection }