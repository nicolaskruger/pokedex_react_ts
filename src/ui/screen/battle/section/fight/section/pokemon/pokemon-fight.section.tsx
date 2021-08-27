import { PokemonDomain, POKEMON_STATE } from "../../../../../../../domain";
import { EnumDictionary } from "../../../../../../../util";
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

    const DEAD = "pokemon-fight__dead";

    const dic: EnumDictionary<POKEMON_STATE, string> = {
        [POKEMON_STATE.MISS]: MISS,
        [POKEMON_STATE.HIT]: HIT,
        [POKEMON_STATE.CAPTURE]: CAPTURE,
        [POKEMON_STATE.DEFAULT]: ""
    }

    const state = pokemon.life === 0 ? DEAD : dic[pokemon.state as POKEMON_STATE];

    return (
        <div className={`pokemon-fight ${className}`}>
            <div className="pokemon-fight__div">
                <img className={`pokemon-fight__img ${state}`} src={img} alt="" />
                {pokemon.state === POKEMON_STATE.MISS && <span className="pokemon-fight__miss-word">miss</span>}
            </div>
        </div>
    )
}

export { PokemonFightSection }