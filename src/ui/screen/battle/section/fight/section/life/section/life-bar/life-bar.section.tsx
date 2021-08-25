import "./life-bar.section.css";

type LifeProps = {
    life: number
}

const LifeBarSection = (props: LifeProps) => {

    const { life } = props;

    return (
        <div className="life-bar-life">
            <span className="life-bar-text">
                HP
            </span>
            <div className="life-bar-life__div">

            </div>
        </div>
    )
}

export { LifeBarSection }