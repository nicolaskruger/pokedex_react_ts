import { useState } from "react"
import { ExpandLess } from "../../../assets";
import "./pokedex.component.css"

enum POKEDEX_STATE {
    POKEDEX,
    MY_POKEMONS,
    DETAILS_MY,
    DETAILS_POEKDEX
}

const PokedexComponent = () => {

    const [open, setOpen] = useState(false);


    return (
        <div className={`Pokedex ${open && "PokedexOpen"}`}>
            <div className="Pokedex__header">
                <button className="Pokedex__openCloseBtn" onClick={() => setOpen(!open)}>
                    <div className={`Pokedex__button__icon ${open && "Pokedex__button__icon__down"}`}>
                        <ExpandLess />
                    </div>
                </button>
            </div>
            <div className="Pokedex__Info">

            </div>
        </div>
    )
}

export { PokedexComponent }