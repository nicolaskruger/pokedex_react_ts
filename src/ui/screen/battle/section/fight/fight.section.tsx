import "./fight.section.css";
import { connect, ConnectedProps } from "react-redux"
import { pokedexProps } from "../../../../../reducer"
import { BattleDisplaySection, LifeSection, PokeballSection, PokemonFightSection } from "./section";
import { useHistory } from "react-router-dom";
import { ROUTES_ENUM } from "../../../../../emun";
import { PokemonDomain } from "../../../../../domain";

const connector = connect(pokedexProps, {});

type Props = ConnectedProps<typeof connector>;

const FightS = (props: Props) => {

    const { currPokemon: a, enemy: b } = props;

    const currPokemon = a as PokemonDomain;

    const enemy = b as PokemonDomain

    const history = useHistory();

    if (!props.battle) {
        setTimeout(() => {
            history.push(ROUTES_ENUM.HOME);
        }, 3000)
    }

    return (
        <div className="fight-section">
            <div className="fight-section__warper">
                <LifeSection className="fight-section__life-ally" pokemon={currPokemon} />
                <LifeSection className="fight-section__life-enemy" pokemon={enemy} />
                <PokemonFightSection className="fight-section__ally" back={true} pokemon={currPokemon} />
                <PokemonFightSection className="fight-section__enemy" back={false} pokemon={enemy} />
                <PokeballSection />
            </div>
            <BattleDisplaySection />
        </div>
    )
}

const FightSection = connector(FightS);

export { FightSection }