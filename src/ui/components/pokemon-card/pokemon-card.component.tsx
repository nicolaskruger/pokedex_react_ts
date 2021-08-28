
import "./pokemon-card.component.css";
import { PokemonDomain } from "../../../domain";
import { LifeBarSection } from "./section";

type PokemonCardSimple = {

    pokemon: PokemonDomain,
}

interface PokemonCardProps extends PokemonCardSimple {
    div?: string,
    img?: string,
    currTime?: Date
}

const PokemonCardComponent = (props: PokemonCardProps) => {

    const { pokemon, div, img, currTime } = props;

    const realTime = currTime as Date;

    const time = pokemon.timeToRecover ? new Date(pokemon.timeToRecover) : null;

    const newTime = time as Date;

    const sec = () => Math.trunc((newTime.getTime() - realTime.getTime()) / 1000);

    const times = () => sec() <= 0 ? "Ok !!!" : `${sec} s`;

    return (
        <div className={`pokemon-card ${div}`}>

            <img className={`pokemon-card__img ${img}`} src={pokemon.sprites.front_default} alt={pokemon.name} />

            <div>
                {pokemon.nick_name || pokemon.name}
            </div>

            {(!!pokemon.life) && (
                <div>
                    {pokemon.life}
                    <LifeBarSection life={Math.trunc(pokemon.life * 100 / pokemon.base_experience)} />
                </div>
            )}
            {
                time && (
                    <div className={sec() <= 0 ? `pokemon-card__finish` : `pokemon-card__not-finish`}>
                        {times}
                    </div>
                )
            }

        </div>
    )
}

export { PokemonCardComponent }
export type { PokemonCardSimple }