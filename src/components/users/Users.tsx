import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";

  export function Users(props:UsersPropsType){

if (props.usersPage.users.length === 0){
    props.setUsers([    {
        id: 1,
        photoUrl:'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
        followed: false,
        fullName: "Dmitry",
        status: "I am a Boss",
        location: {city: "Minsk", country: "Belarus"}
    },
        {
            id: 2,
            photoUrl:'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
            followed: true,
            fullName: "Dmitry",
            status: "I am a Boss too",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            photoUrl:'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
            followed: false,
            fullName: "Dmitry",
            status: "I am a Boss too",
            location: {city: "Kiev", country: "Ukraine"}
        },])
}
     return(
         <>
             {props.usersPage.users.map(u=> <div key={u.id}>
      <span>
          <div><img src={u.photoUrl} alt="avatar" className={s.userPhoto}/></div>
    <div>
        {u.followed
    ? <button onClick={()=> props.unFollow(u.id)}>Unfollow</button>
  : <button onClick={()=> props.follow(u.id)}>Follow</button> }
    </div>
      </span>
             <span>
                 <div>{u.fullName}</div>
                 <div>{u.status}</div>
             </span>
                 <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                 </span>
             </div>   )}
         </>
     )
 }

