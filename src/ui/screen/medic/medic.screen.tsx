import { HospitalSection, WaitingRoomSection } from "./section"
import "./medic.section.css"

const MedicScreen = () => {
    return (
        <div className="medic">
            <HospitalSection />
            <WaitingRoomSection />
        </div>
    )
}

export { MedicScreen }