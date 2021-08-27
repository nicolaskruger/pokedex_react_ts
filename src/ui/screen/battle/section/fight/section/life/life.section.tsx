import { PokemonDomain } from "../../../../../../../domain";
import "./life.section.css";
import { LifeBarSection } from "./section";

type LifeProps = {
    className?: string,
    pokemon: PokemonDomain
}

const LifeSection = (props: LifeProps) => {

    const { className, pokemon } = props;

    return (
        <div className={`life ${className}`}>
            <div className="life__warper">
                <div className="life__div">
                    <span className="life-name">
                        {pokemon.name}
                    </span>
                    <span className="life-level">
                        lv {pokemon.base_experience}
                    </span>
                </div>
                <LifeBarSection life={Math.trunc(pokemon.life as number * 100 / pokemon.base_experience)} />
                <span>
                    {`${pokemon.life}/${pokemon.base_experience} life`}
                </span>
            </div>
        </div>
    )
}

export { LifeSection }