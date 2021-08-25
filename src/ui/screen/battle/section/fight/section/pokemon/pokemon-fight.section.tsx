import { PokemonDomain } from "../../../../../../../domain";

type PokemonFigthProps = {
    pokemon: PokemonDomain,
    className?: string,
    back: boolean
};

const PokemonFightSection = (props: PokemonFigthProps) => {

    const { pokemon, className, back } = props;

    const img = back ? pokemon.sprites.back_default : pokemon.sprites.front_default;

    return (
        <div className={className}>
            <img src={img} alt="" />
        </div>
    )
}

export { PokemonFightSection }