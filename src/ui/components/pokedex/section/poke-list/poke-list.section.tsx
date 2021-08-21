import { useState } from "react"
import { connect, ConnectedProps } from "react-redux"
import { pokedexProps } from "../../../../../reducer"
import { ActiveOper, PokeListCommunSection } from "../poke-list-commun/poke-list-commun.section"


const connector = connect(pokedexProps, {})

type PokedexSectionProps = ConnectedProps<typeof connector>


const PokeListS = ({ pokeList }: PokedexSectionProps) => {

    const MAX_SIZE = 6;
    const PAGE_SIZE = Math.ceil(pokeList.length / MAX_SIZE) + 1;
    const [currPage, setCurrPage] = useState(0);

    const hasNext = currPage < (PAGE_SIZE - 1)

    const next: ActiveOper = {
        active: hasNext,
        oper: () => {
            if (hasNext)
                setCurrPage(currPage + 1);
        }
    }

    const hasPrev = currPage > 0;

    const prev: ActiveOper = {
        active: hasPrev,
        oper: () => {
            if (hasPrev)
                setCurrPage(currPage - 1)
        }
    }

    const pageable = pokeList.slice(currPage * MAX_SIZE, (currPage + 1) * (MAX_SIZE))

    return (
        <div className="PokedexSection" >
            <PokeListCommunSection
                pokemons={pageable}
                next={next}
                prev={prev}
                onClick={(poke) => { }} />
        </div>
    )
}

const PokeListSection = connector(PokeListS)

export { PokeListSection }