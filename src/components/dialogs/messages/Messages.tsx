import s from "../Dialogs.module.css";
import React from "react";

type MessagesPropsType = {
    message:string
}

const Messages = (props: MessagesPropsType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}
export default Messages