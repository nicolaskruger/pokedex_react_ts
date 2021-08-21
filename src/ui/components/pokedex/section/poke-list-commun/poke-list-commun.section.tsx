import { NextIcon, PreviousIcon } from "../../../../../assets";
import { PokemonDomain } from "../../../../../domain";
import { PokemonListComponent } from "../../../pokemon-list/pokemon-list.component";
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

            <PokemonListComponent
                div="PokeListCommunSection"
                button="PokedexListCommunSection__button"
                Card={PokemonCardSection}
                onClick={onClick}
                pokemons={pokemons}
            />

            <button className="PokedexListCommunSection__button" onClick={next.oper} >
                <NextIcon active={next.active} />
            </button>
        </div>
    )
}

export { PokeListCommunSection }
export type { ActiveOper }