import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile_reducer/profile-reducer";
type ProfilePropsType = {
    updateStatus:(status:string)=>void
    profile:ProfileType|null
    status:string
}
export function Profile(props:ProfilePropsType){

    return(
     <div>
       <ProfileInfo {...props}  />
        <MyPostsContainer />
     </div>
 )
}

