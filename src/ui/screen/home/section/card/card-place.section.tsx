import "./card-place.section.css";

type CardPlaceProps = {
    name: string,
    src: string,
    onClick: () => void
}

const CardPlaceSection = (props: CardPlaceProps) => {

    const { name, src, onClick } = props;

    return (
        <button className="card-place" onClick={onClick}>
            <img className="card-place__img" src={src} alt={name} />
            <p className="card-place__title">
                {name}
            </p>
        </button>
    )
}

export { CardPlaceSection }