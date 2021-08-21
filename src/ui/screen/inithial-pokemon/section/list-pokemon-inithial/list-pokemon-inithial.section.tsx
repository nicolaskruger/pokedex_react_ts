import { PokemonListComponent, PokemonListComponentPropsSimple } from "../../../../components"
import { PokemonCardInithialSection } from "../pokemon-card-inithial/pokemon-card-inithial.section"
import "./list-pokemon-inithial.section.css";

const ListPokemonInithialSection = (props: PokemonListComponentPropsSimple) => {

    const { onClick, pokemons } = props;

    return (

        <PokemonListComponent
            Card={PokemonCardInithialSection}
            div="list-pokemon-inithial-section"
            button="list-pokemon-inithial-section__button"
            onClick={onClick}
            pokemons={pokemons}
        />
    )
}

export { ListPokemonInithialSection }