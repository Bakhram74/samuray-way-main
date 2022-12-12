import s from "../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../../redux/dialogs_reducer/dialogs-reducer";


const Messages = (props: MessagesType) => {
    return (

      <div>
          <div key={props.id} className={s.message}>{props.message}</div>

      </div>






    )
}
export default Messages