import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
type ProfilePropsType = {
    profile:ProfileType|null
}
export function Profile(props:ProfilePropsType){

    return(
     <div>
       <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
     </div>
 )
}

