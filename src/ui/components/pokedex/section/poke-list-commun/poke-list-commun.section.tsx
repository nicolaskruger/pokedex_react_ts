import { NextIcon, PreviousIcon } from "../../../../../assets";
import { PokemonDomain } from "../../../../../domain";
import { SimpleLoader } from "../../../loader";
import { PokemonCardSection } from "../pokemon-card/pokemon-card.section";
import "./poke-list-commun.section.css";


type ActiveOper = {
    active: boolean,
    oper: () => void
}

type PokeListCommunProps = {
    pokemons: PokemonDomain[],
    next: ActiveOper,
    prev: ActiveOper,
    onClick: (pokemon: PokemonDomain) => void
}

const PokeListCommunSection = (props: PokeListCommunProps) => {

    const { pokemons, onClick, next, prev } = props;

    return (
        <div className="PokeListCommunSection">
            <button className="PokedexListCommunSection__button" onClick={prev.oper} >
                <PreviousIcon active={prev.active} />
            </button>

            {pokemons.map((poke, index) => (
                <button className="PokedexListCommunSection__button" key={index} onClick={() => onClick(poke)}>
                    <PokemonCardSection pokemon={poke} />
                </button>
            ))}

            <button className="PokedexListCommunSection__button" onClick={next.oper} >
                <NextIcon active={next.active} />
            </button>
        </div>
    )
}

export { PokeListCommunSection }
export type { ActiveOper }