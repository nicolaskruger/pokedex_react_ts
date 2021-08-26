import { PokemonDomain } from "../../../../../../../domain";
import "./pokemon-fight.section.css";

type PokemonFigthProps = {
    pokemon: PokemonDomain,
    className?: string,
    back: boolean
};

const PokemonFightSection = (props: PokemonFigthProps) => {

    const { pokemon, className, back } = props;

    const img = back ? pokemon.sprites.back_default : pokemon.sprites.front_default;

    const HIT = "pokemon-fight__hit";

    const MISS = "pokemon-fight__miss";

    const CAPTURE = "pokemon-fight__capture";

    return (
        <div className={`pokemon-fight ${className}`}>
            <div className="pokemon-fight__div">
                <img className={`pokemon-fight__img ${CAPTURE}`} src={img} alt="" />
                {true && <span className="pokemon-fight__miss-word">miss</span>}
            </div>
        </div>
    )
}

export { PokemonFightSection }