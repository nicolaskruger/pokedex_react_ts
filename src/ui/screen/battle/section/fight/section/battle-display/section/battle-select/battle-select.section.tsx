import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { PokemonDomain } from "../../../../../../../../../domain";
import { usePokedex } from "../../../../../../../../../hooks";
import { pokedexProps } from "../../../../../../../../../reducer";
import { EnumDictionary } from "../../../../../../../../../util";
import "./battle-select.section.css";

enum BATTLE_SECTION {
    DEF,
    POWER
}

const connector = connect(pokedexProps, {});

type Props = ConnectedProps<typeof connector>;

interface BattleSelectProps extends Props {
    state: BATTLE_SECTION
}


const BattleSelectS = (props: BattleSelectProps) => {

    const [block, setBlock] = useState(false);

    const { DEF, POWER } = BATTLE_SECTION;

    const { state, currPokemon: a } = props;

    const currPokemon = a as PokemonDomain

    const pokedex = usePokedex();

    const DefMsg = () => {
        return (
            <span className="battle-select__def">
                what should you do {currPokemon?.name.toLocaleUpperCase()} ?
            </span>
        )
    }

    const Power = () => {

        const handleClick = (damage: number) => {

            if (block) return;
            setBlock(true);
            pokedex.allyAtack(damage)

            setTimeout(() => {
                pokedex.enemyAtack();
                setBlock(false);
            }, 1000);
        }

        return (
            <div className="battle-select__power">
                {currPokemon.abilities.map((ability, i) => {

                    const length = currPokemon.abilities.length;

                    const damage = Math.trunc((length - i) / length * currPokemon.base_experience);

                    return (
                        <button onClick={() => handleClick(damage)} className="battle-select__power-button">
                            {damage}: {ability.ability.name}
                        </button>
                    )

                })}
            </div>
        )
    }

    const dic: EnumDictionary<BATTLE_SECTION, JSX.Element> = {
        [DEF]: <DefMsg />,
        [POWER]: <Power />
    }

    return (
        <div className="battle-select">
            <div className="battle-select__yellow-border">
                {dic[state]}
            </div>
        </div>
    )
}

const BattleSelectSection = connector(BattleSelectS);

export { BattleSelectSection, BATTLE_SECTION }