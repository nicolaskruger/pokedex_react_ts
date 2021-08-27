import { useState } from "react"
import "./battle-display.section.css"
import { BattleButtonSection, BattleSelectSection, BATTLE_SECTION } from "./section"

const BattleDisplaySection = () => {

    const [selectState, setSelectState] = useState(BATTLE_SECTION.DEF);

    return (
        <div className="battle-display">
            <BattleSelectSection state={selectState} />
            <BattleButtonSection onClickFight={() => setSelectState(BATTLE_SECTION.POWER)} />
        </div>
    )
}

export { BattleDisplaySection }

