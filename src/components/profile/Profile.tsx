import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./my-posts/MyPosts";
export function Profile(){
 return(
     <div className={s.content}>
         <div><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:' +
             'ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'}/></div>
         <div>ava + description</div>
        <MyPosts/>
     </div>
 )
}