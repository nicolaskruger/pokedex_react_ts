import { connect, ConnectedProps } from "react-redux"
import { PokemonDomain } from "../../../../../domain";
import { usePokedex } from "../../../../../hooks";
import { pokedexProps } from "../../../../../reducer"
import { HospitalRoomComponent } from "../../../../components";
import "./waiting-room.section.css";

const connector = connect(pokedexProps, {});

type Prop = ConnectedProps<typeof connector>

const WaitingRoomS = (props: Prop) => {

    const { pokeList } = props;

    const pokedex = usePokedex();

    const handleClick = (pokemon: PokemonDomain) => {
        pokedex.goToMedic(pokemon);
    }

    return (
        <HospitalRoomComponent className="waiting-room" onClick={handleClick} pokemons={pokeList} />
    )
}

const WaitingRoomSection = connector(WaitingRoomS);

export { WaitingRoomSection }