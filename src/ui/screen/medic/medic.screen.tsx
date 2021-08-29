import { HospitalSection, WaitingRoomSection } from "./section"
import "./medic.section.css"
import { HomeIcon } from "../../../assets"
import { useHistory } from "react-router-dom"
import { ROUTES_ENUM } from "../../../emun"

const MedicScreen = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push(ROUTES_ENUM.HOME)
    }

    return (
        <div className="medic">
            <button className="medic-button" onClick={handleClick}>
                <HomeIcon />
            </button>
            <HospitalSection />
            <WaitingRoomSection />
        </div>
    )
}

export { MedicScreen }