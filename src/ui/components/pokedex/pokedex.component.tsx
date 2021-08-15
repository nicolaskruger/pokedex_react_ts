import { useState } from "react";
import { ExpandLess } from "../../../assets";
import "./pokedex.component.css";
import { PokedexSection, PokeListSection } from "./section";

enum POKEDEX_STATE {
    POKEDEX,
    MY_POKEMONS,
    DETAILS_MY,
    DETAILS_POEKDEX
}

const PokedexComponent = () => {

    const [open, setOpen] = useState(false);
    const [state, setState] = useState<POKEDEX_STATE>(POKEDEX_STATE.POKEDEX);

    const { POKEDEX, MY_POKEMONS } = POKEDEX_STATE;

    const isPokedex = () => {
        return state === POKEDEX_STATE.POKEDEX ? "Pokedex__button_selected" : ""
    }

    const setMyPokemons = () => {
        setState(POKEDEX_STATE.MY_POKEMONS);
    }

    const setPokedex = () => {
        setState(POKEDEX_STATE.POKEDEX);
    }

    const isMyPokemons = () => {
        return state === POKEDEX_STATE.MY_POKEMONS ? "Pokedex__button_selected" : ""
    }

    const render = () => {
        switch (state) {
            case POKEDEX:
                return <PokedexSection />

            case MY_POKEMONS:
                return <PokeListSection />
            default:
                return (
                    <div>none</div>
                )
        }
    }

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
                <nav className="Pokedex__Nav">
                    <button
                        className={`Pokedex__button ${isPokedex()}`}
                        onClick={setPokedex}
                    >
                        pokedex
                    </button>
                    <button
                        className={`Pokedex__button ${isMyPokemons()}`}
                        onClick={setMyPokemons}
                    >
                        my pokemon
                    </button>
                </nav>
                <div className="Pokedex__content">
                    {render()}
                </div>
            </div>
        </div>
    )
}

export { PokedexComponent }