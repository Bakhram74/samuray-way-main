import React from "react";

import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile_reducer/profile-reducer";
import Preloader from "../../../common/preloader/Preloader";
import userPhoto  from '../../users/user-images/images.jpeg'
import ProfileStatus from "./ProfileStatus";
type ProfileInfoPropsType={
    updateStatus:(status:string)=>void
    profile:ProfileType|null
    status:string
}

export function ProfileInfo(props:ProfileInfoPropsType){

    if (!props.profile){
        return <Preloader/>
    }

 return(
     <div>
         <div className={s.descriptionBlock}>
            <div><img src={props.profile.photos.small ? props.profile.photos.small : userPhoto }/></div>
            {/*<div>{props.profile.aboutMe}</div>*/}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
         </div>
     </div>
 )
}