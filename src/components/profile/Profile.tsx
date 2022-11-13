import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";

export function Profile(){
    return(
     <div>
       <ProfileInfo />
        <MyPostsContainer />
     </div>
 )
}

