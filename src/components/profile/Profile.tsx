import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

export function Profile(props:ProfilePropsType){

    return(
     <div>
       <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
     </div>
 )
}

