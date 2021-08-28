import { PokemonDomain } from "../../../domain"
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import "./hospital-room.component.css";

type HospitalRoomProps = {
    currTime?: Date
    className?: string
    pokemons: PokemonDomain[],
    onClick: (pokemon: PokemonDomain) => void
}

const HospitalRoomComponent = (props: HospitalRoomProps) => {

    const { pokemons, className, currTime, onClick } = props;

    return (
        <div className={`hospital-room ${className}`}>
            {
                pokemons.map(pokemon => {
                    return (
                        <button className="hospital-room__button" onClick={() => onClick(pokemon)}>
                            <PokemonCardComponent
                                div="hospital-room-card"
                                currTime={currTime}
                                pokemon={pokemon}
                            />
                        </button>
                    )
                })
            }
        </div>
    )
}

export { HospitalRoomComponent }