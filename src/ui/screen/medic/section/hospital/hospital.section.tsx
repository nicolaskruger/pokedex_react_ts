import { useEffect } from "react";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux"
import { PokemonDomain } from "../../../../../domain";
import { usePokedex } from "../../../../../hooks";
import { pokedexProps } from "../../../../../reducer"
import { HospitalRoomComponent } from "../../../../components";
import "./hospital.section.css"

const connector = connect(pokedexProps, {});

type Props = ConnectedProps<typeof connector>

const HospitaS = (props: Props) => {

    const [currTime, setCurrTime] = useState(new Date());

    const { medic } = props;

    const pokedex = usePokedex();

    const handleClick = (pokemon: PokemonDomain) => {
        pokedex.goToPokedex(pokemon);
    }

    useEffect(() => {
        const id = setInterval(() => {
            setCurrTime(new Date())
        }, 500)

        return () => {
            clearInterval(id);
        }
    })


    return (
        <HospitalRoomComponent className="hospital" currTime={currTime} onClick={handleClick} pokemons={medic} />
    )
}

const HospitalSection = connector(HospitaS);

export { HospitalSection }
