import { InfoIcon } from "../../../../../../../assets";
import { MsgTime } from "../../../../../../../hooks"
import "./info.section.css";

interface InfoProps {
    msg: MsgTime
}

const InfoSection = ({ msg }: InfoProps) => {

    const { open } = msg;

    return (
        <div className={`info-home ${open ? "info-home-fadein" : "info-home-fadeout"}`}>
            <InfoIcon />
            <p>
                {msg.msg}
            </p>
        </div>
    )
}


export { InfoSection }
