import { CSSProperties } from "react";
import "./life-bar.section.css"
type LifeBarProps = {
    life: number
}

const LifeBarSection = (prop: LifeBarProps) => {
    const { life } = prop;

    const style: CSSProperties = {
        backgroundColor: "lightgreen",
        width: `${life}%`,
        height: "2px"
    }

    return (
        <div className="LifeBarSection">
            <div style={style}>

            </div>
        </div>
    )
}

export { LifeBarSection }