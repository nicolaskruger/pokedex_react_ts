import { NextIcon, PreviousIcon } from "../../../../../assets";
import { PokemonDomain } from "../../../../../domain";
import { PokemonCardSection } from "../pokemon-card/pokemon-card.section";
import "./poke-list-commun.section.css";

type PokeListCommunProps = {
    pokemons: PokemonDomain[],
    next: () => void,
    prev: () => void,
    onClick: (pokemon: PokemonDomain) => void
}

const PokeListCommunSection = (props: PokeListCommunProps) => {

    const { pokemons, onClick } = props;

    return (
        <div className="PokeListCommunSection">
            <button className="PokedexListCommunSection__button" >
                <PreviousIcon />
            </button>
            {pokemons.map((poke, index) => (
                <button className="PokedexListCommunSection__button" key={index} onClick={() => onClick(poke)}>
                    <PokemonCardSection pokemon={poke} />
                </button>
            ))}
            <button className="PokedexListCommunSection__button" >
                <NextIcon />
            </button>
        </div>
    )
}

export { PokeListCommunSection }