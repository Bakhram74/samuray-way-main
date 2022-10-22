import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./my-posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export function Profile(props:ProfilePropsType){
    return(
     <div>
       <ProfileInfo />
        <MyPosts state={props.state}/>
     </div>
 )
}
type ProfilePropsType = {
    state:ProfilePage
}
export type ProfilePage = {
    post : {id:number,message:string,likesCount:number}[]
}
