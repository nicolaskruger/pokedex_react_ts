import { PokemonCardComponent, PokemonCardSimple } from "../../../../components";
import "./pokemon-card-inithial.section.css";

const PokemonCardInithialSection = (props: PokemonCardSimple) => {

    const { pokemon } = props;

    return (
        <PokemonCardComponent
            pokemon={pokemon}
            div="pokemon-inithial-section"
            img="pokemon-inithial-section__img"
        />
    )
}

export { PokemonCardInithialSection }