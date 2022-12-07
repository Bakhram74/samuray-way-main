import React from "react";

import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";
import userPhoto  from '../../users/user-images/images.jpeg'
type ProfileInfoPropsType={
    profile:ProfileType|null
}

export function ProfileInfo(props:ProfileInfoPropsType){

    if (!props.profile){
        return <Preloader/>
    }

 return(
     <div>
         <div><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:' +
             'ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'} alt={"nature"}/></div>
         <div className={s.descriptionBlock}>
            <div><img src={props.profile.photos.small ? props.profile.photos.small : userPhoto }/></div>
            <div>{props.profile.aboutMe}</div>
             ava + description
         </div>
     </div>
 )
}