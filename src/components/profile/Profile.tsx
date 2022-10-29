import React from "react";
import {MyPosts} from "./my-posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

export function Profile(props:ProfilePropsType){
    return(
     <div>
       <ProfileInfo />
        <MyPosts profilePage={props.profilePage}  addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
     </div>
 )
}
export type ProfilePropsType = {
    profilePage:ProfilePageType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}

