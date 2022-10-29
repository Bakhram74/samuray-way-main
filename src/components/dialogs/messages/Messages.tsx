import s from "../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../../redux/state";


const Messages = (props: MessagesType) => {
    return (

      <div>
          <div key={props.id} className={s.message}>{props.message}</div>

      </div>






    )
}
export default Messages