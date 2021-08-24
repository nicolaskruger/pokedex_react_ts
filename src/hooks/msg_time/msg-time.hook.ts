import { useState } from "react"

type MsgTime = {
    send: (newMsg: string) => void,
    msg: string,
    open: boolean;
}


const useMsgTime = (msec: number): MsgTime => {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");

    const send = (newMsg: string) => {
        setOpen(true);

        setMsg(newMsg);

        setTimeout(() => {
            setOpen(false);
        }, msec)
    }

    return {
        open,
        msg,
        send
    }
}

export { useMsgTime }
export type { MsgTime }