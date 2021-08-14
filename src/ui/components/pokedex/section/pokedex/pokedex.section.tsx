import { PokemonDomain } from "../../../../../domain"
import { PokeListCommunSection } from "../poke-list-commun/poke-list-commun.section"
import "./pokedex.section.css";

const PokedexSection = () => {

    const pokemon: PokemonDomain = {
        abilities: [
            {
                "ability": {
                    "name": "overgrow",

                }
            },
            {
                "ability": {
                    "name": "chlorophyll",
                }
            }
        ],
        name: "bulbasaur",
        base_experience: 64,
        life: 50,
        nick_name: "bulba",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
    }

    const pokelist = 'a'.repeat(6).split('')
        .map(v => pokemon)

    return (
        <div className="PokedexSection" >
            <PokeListCommunSection
                pokemons={pokelist}
                next={() => { }}
                prev={() => { }}
                onClick={(poke) => { }} />
        </div>
    )
}

export { PokedexSection }