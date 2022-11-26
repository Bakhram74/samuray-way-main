import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import user_png from './user-images/images.jpeg'
import {UsersPropsType} from "./UsersContainer";

 export class Users extends React.Component<UsersPropsType>{
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response=>{
            this.props.setUsers(response.data.items)
this.props.setTotalUsersCount(response.data.totalCount)
        })
}
 onSetCurrentPage = (pageNumber:number)=>{
     this.props.setCurrentPage(pageNumber)
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response=>{
             this.props.setUsers(response.data.items)

         })
     }
     render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
         let pages = []
         for (let i =1;i <= pagesCount;i++){
             pages.push(i)
         }
    return(
        <div>
            <div>
                {pages.map(p=>{

                    return(
                        <span key={p} className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={()=>this.onSetCurrentPage(p)}
                        >{p}</span>
                    )
                })}
            </div>

            {this.props.usersPage.map(u=> {
               return( <div key={u.id}>

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
                </div>)
            }   )}
        </div>
    )
}


 }

