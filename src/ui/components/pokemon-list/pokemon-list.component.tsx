import { FC } from "react"
import { PokemonDomain } from "../../../domain"
import { PokemonCardSimple } from "../pokemon-card/pokemon-card.component"
import "./pokemon-list.component.css";

type PokemonListComponentPropsSimple = {
    onClick: (pokemon: PokemonDomain) => void,
    pokemons: PokemonDomain[]
}

interface PokemonListComponentProps extends PokemonListComponentPropsSimple {
    div: string,
    button?: string;
    Card: FC<PokemonCardSimple>
}

const PokemonListComponent = (props: PokemonListComponentProps) => {

    const { Card, onClick, pokemons, div, button } = props;

    return (
        <div className={div}>
            {
                pokemons.map(pokemon => (
                    <button className={`pokemon-list-component__button ${button}`} onClick={() => onClick(pokemon)} >
                        <Card pokemon={pokemon} />
                    </button>
                ))
            }
        </div>
    )
}

export { PokemonListComponent }
export type { PokemonListComponentPropsSimple }