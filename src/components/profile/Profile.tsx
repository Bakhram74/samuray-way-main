import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import { StoreType} from "../../redux/store";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";

export function Profile(props:ProfilePropsType){
    return(
     <div>
       <ProfileInfo />
        <MyPostsContainer store={props.store} />
     </div>
 )
}
export type ProfilePropsType = {
store:StoreType
}

