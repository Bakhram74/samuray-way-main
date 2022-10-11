import React from "react";
import s from './ProfileInfo.module.css'


export function ProfileInfo(){
 return(
     <div>
         <div><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:' +
             'ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'} alt={"nature"}/></div>
         <div className={s.descriptionBlock}>ava + description</div>
     </div>
 )
}