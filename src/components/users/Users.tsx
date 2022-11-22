import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import user_png from './user-images/images.jpeg'
import {UsersPropsType} from "./UsersContainer";

 export class Users extends React.Component<UsersPropsType>{
componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response=>{
            this.props.setUsers(response.data.items)
        })
}
     render() {
    return(
        <>
            {this.props.usersPage.users.map(u=> <div key={u.id}>
      <span>
          <div><img src={u.photos.small !== null ? u.photos.small : user_png} alt="avatar" className={s.userPhoto}/></div>
    <div>
        {u.followed
            ? <button onClick={()=> this.props.unFollow(u.id)}>Unfollow</button>
            : <button onClick={()=> this.props.follow(u.id)}>Follow</button> }
    </div>
      </span>
                <span>
                 <div>{u.name}</div>
                 <div>{u.status}</div>
             </span>
                <span>
                     <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                 </span>
            </div>   )}
        </>
    )
}


 }

