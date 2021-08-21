import { useState } from "react"
import { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { PokemonDomain } from "../../../domain";
import { ROUTES_ENUM } from "../../../emun";
import { usePokedex } from "../../../hooks";
import { pokedexProps } from "../../../reducer";
import "./inithial-pokemon.screen.css";
import { ListPokemonInithialSection } from "./section";





const InithialPokemonScreen = () => {

    const [inithialPokemons, setInithialPokemons] = useState<PokemonDomain[]>([]);

    const pokedexHook = usePokedex();

    const history = useHistory();

    const init = async () => {
        const pokemons = await pokedexHook.getInithialPokemon();
        setInithialPokemons(pokemons);
    }

    useEffect(() => {
        init();
    }, [])

    const handleClick = (pokemon: PokemonDomain) => {
        pokedexHook.addPokemon(pokemon);
        history.push(ROUTES_ENUM.HOME)
    }

    return (
        <div className="inithial-pokemon">
            <h1 className="inithial-pokemon__h1">
                Select your inithial pokemon
            </h1>
            <ListPokemonInithialSection
                onClick={handleClick}
                pokemons={inithialPokemons}
            />
        </div>
    )
}

export { InithialPokemonScreen }