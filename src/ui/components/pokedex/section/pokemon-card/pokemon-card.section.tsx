import { PokemonDomain } from "../../../../../domain"
import { LifeBarSection } from "./section";
import "./pokemon-card.section.css";

type PokemonCardProps = {
    pokemon: PokemonDomain
}

const PokemonCardSection = (props: PokemonCardProps) => {

    const { pokemon } = props;

    return (
        <div className="PokemonCard">

            <img className="PokemonCard__img" src={pokemon.sprites.front_default} alt={pokemon.name} />

            <div>
                {pokemon.nick_name || pokemon.name}
            </div>

            {pokemon.life && (
                <div>
                    {pokemon.life}
                    <LifeBarSection life={pokemon.life} />
                </div>
            )}

        </div>
    )
}

export { PokemonCardSection }