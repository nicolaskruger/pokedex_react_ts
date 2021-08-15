import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { PokemonDomain } from "../../../../../domain"
import { usePokedex } from "../../../../../hooks";
import { pokedexProps } from "../../../../../reducer";
import { ActiveOper, PokeListCommunSection } from "../poke-list-commun/poke-list-commun.section"
import "./pokedex.section.css";

const connector = connect(pokedexProps, {})

type PokedexSectionProps = ConnectedProps<typeof connector>

const PokedexSectio = ({ pokedex }: PokedexSectionProps) => {

    const pokedexHook = usePokedex();

    const { next, previous: previus } = pokedex;


    const nextObj: ActiveOper = {
        active: !!next,
        oper: () => {
            if (next)
                pokedexHook.nextPokedex()
        }
    }

    const prevObj: ActiveOper = {
        active: !!previus,
        oper: () => {
            if (previus)
                pokedexHook.prevPokedex()
        }
    }

    useEffect(() => {
        pokedexHook.setPokedex();
    }, [])

    return (
        <div className="PokedexSection" >
            <PokeListCommunSection
                pokemons={pokedex.resultDetail as PokemonDomain[] || []}
                next={nextObj}
                prev={prevObj}
                onClick={(poke) => { }} />
        </div>
    )
}

const PokedexSection = connector(PokedexSectio);

export { PokedexSection }