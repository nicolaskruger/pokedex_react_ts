
import "./pokemon-card.component.css";
import { PokemonDomain } from "../../../domain";
import { LifeBarSection } from "./section";

type PokemonCardSimple = {

    pokemon: PokemonDomain,
}

interface PokemonCardProps extends PokemonCardSimple {
    div?: string,
    img?: string
}

const PokemonCardComponent = (props: PokemonCardProps) => {

    const { pokemon, div, img } = props;

    return (
        <div className={`pokemon-card ${div}`}>

            <img className={`pokemon-card__img ${img}`} src={pokemon.sprites.front_default} alt={pokemon.name} />

            <div>
                {pokemon.nick_name || pokemon.name}
            </div>

            {pokemon.life && (
                <div>
                    {pokemon.life}
                    <LifeBarSection life={Math.trunc(pokemon.life * 100 / pokemon.base_experience)} />
                </div>
            )}

        </div>
    )
}

export { PokemonCardComponent }
export type { PokemonCardSimple }