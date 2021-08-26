import "./fight.section.css";
import { connect, ConnectedProps } from "react-redux"
import { pokedexProps } from "../../../../../reducer"
import { BattleDisplaySection, LifeSection, PokeballSection, PokemonFightSection } from "./section";

const connector = connect(pokedexProps, {});

type Props = ConnectedProps<typeof connector>;

const FightS = (props: Props) => {

    const { currPokemon, enemy } = props;

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