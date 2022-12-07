import React from 'react';
import s from "./Users.module.css";
import user_png from "./user-images/images.jpeg";
import {UserType} from "../../redux/users_reducer/users-reducers";
import {NavLink} from "react-router-dom";

type UsersGetPropsType = {
    usersPage: Array<UserType>
    onSetCurrentPage: (pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export const Users = (props: UsersGetPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {

                    return (
                        <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                              onClick={() => props.onSetCurrentPage(p)}
                        >{p}</span>
                    )
                })}
            </div>

            {props.usersPage.map(u => {
                return (<div key={u.id}>

      <span>
          <NavLink to={'/profile/'+u.id}><img src={u.photos.small !== null ? u.photos.small : user_png} alt="avatar"
                    className={s.userPhoto}/></NavLink>
    <div>
        {u.followed
            ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
                </div>)
            })}
        </div>
    )

};

