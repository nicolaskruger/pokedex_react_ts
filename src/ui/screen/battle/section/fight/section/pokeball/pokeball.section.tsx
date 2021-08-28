import { connect, ConnectedProps } from "react-redux"
import { pokeballImg } from "../../../../../../../assets"
import { pokedexProps } from "../../../../../../../reducer"
import "./pokeball.section.css"



const connector = connect(pokedexProps, {});

type Props = ConnectedProps<typeof connector>

const PokeballS = (props: Props) => {

    const { launch, battle } = props;

    const WAPPER = "pokeball-section__anime-warper";
    const SECTION = "pokeball-section__anime-section";

    const take = !battle;

    const RESULT = take ? "pokeball__take" : "pokeball__n__take";

    const RESULT_TEXT = take ? "catch" : "fail"

    if (launch)
        return (
            <div className={`pokeball-section__warpper ${WAPPER}`}>
                <div className={`pokeball-section ${SECTION}`}>
                    <span className={`pokeball-text ${RESULT}`}>{RESULT_TEXT}</span>
                    <img className="pokeball-section__img" src={pokeballImg} alt="" />
                </div>
            </div>
        )
    return <></>
}

const PokeballSection = connector(PokeballS);

export { PokeballSection }