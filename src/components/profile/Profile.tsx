import React from "react";
import {MyPosts} from "./my-posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";

export function Profile(props:ProfilePropsType){
    return(
     <div>
       <ProfileInfo />
        <MyPosts profilePage={props.profilePage}  dispatch={props.dispatch} />
     </div>
 )
}
export type ProfilePropsType = {
    profilePage:ProfilePageType
    dispatch: (action: ActionType) => void
}

