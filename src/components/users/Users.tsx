import React from 'react';
import s from "./Users.module.css";
import user_png from "./user-images/images.jpeg";
import { UserType} from "../../redux/users_reducer/users-reducers";
import {NavLink} from "react-router-dom";



type UsersGetPropsType = {
    usersPage: Array<UserType>
    onSetCurrentPage: (pageNumber: number) => void
    usersOnPage: number
    totalUsersCount: number
    currentPage: number
    follow: (id: string) => void
    unFollow: (id: string) => void
    setFollowing:(isFollowing:boolean,id:string)=>void
    followingInProgress:string[]
}

export const Users = (props: UsersGetPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPage)   // users 14 pages 3
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => {

                    return (
                        <span key={page} className={props.currentPage === page ? s.selectedPage : ''}
                              onClick={() => props.onSetCurrentPage(page)}
                        >{page}</span>
                    )
                })}
            </div>

            {props.usersPage.map(u => {
                return (
                    <div key={u.id}>
      <span>
          <NavLink to={'/profile/' + u.id}><img src={u.photos.small !== null ? u.photos.small : user_png} alt="avatar"
                                                className={s.userPhoto}/></NavLink>
    <div>
        {u.followed
            ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => props.unFollow(u.id)}>
                Unfollow
                </button>

            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=>props.follow(u.id)}>
                Follow
            </button>}
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

