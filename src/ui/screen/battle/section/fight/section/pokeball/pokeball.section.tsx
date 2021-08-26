import { pokeballImg } from "../../../../../../../assets"
import "./pokeball.section.css"

type PokeballProps = {
    active?: boolean,
    take?: boolean
}

const PokeballSection = (props: PokeballProps) => {

    const { active, take } = props;

    const WAPPER = "pokeball-section__anime-warper";
    const SECTION = "pokeball-section__anime-section";

    const RESULT = take ? "pokeball__take" : "pokeball__n__take";

    const RESULT_TEXT = take ? "catch" : "fail"

    return (
        <div className={`pokeball-section__warpper ${WAPPER}`}>
            <div className={`pokeball-section ${SECTION}`}>
                <span className={`pokeball-text ${RESULT}`}>{RESULT_TEXT}</span>
                <img className="pokeball-section__img" src={pokeballImg} alt="" />
            </div>
        </div>
    )
}

export { PokeballSection }