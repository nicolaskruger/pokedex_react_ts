import { PokemonDomain } from "../../../../../domain"
import "./pokemon-card.section.css";
import { PokemonCardComponent } from "../../../pokemon-card/pokemon-card.component";

type PokemonCardProps = {
    pokemon: PokemonDomain
}

const PokemonCardSection = (props: PokemonCardProps) => {

    const { pokemon } = props;

    return (
        <PokemonCardComponent pokemon={pokemon} div={"PokemonCard"} img={"PokemonCard__img"} />
    )
}

export { PokemonCardSection }