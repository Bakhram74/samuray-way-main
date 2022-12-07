import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {
    follow,
    setCurrentPage, setIsFetching, setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/users_reducer/users-reducers";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/preloader/Preloader";


type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
type MapDispatchToPropsType = {
    follow: (id:number)=>void
    unFollow: (id:number)=>void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    setIsFetching:(isFetching:boolean)=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>{
    return{
        usersPage: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage,
        isFetching:state.users.isFetching
    }
}
const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching

}


class UsersContainer extends React.Component<UsersPropsType>{
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }
    onSetCurrentPage = (pageNumber:number)=>{
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }
    render() {
        return(
            <>
               <div>
                   {this.props.isFetching && <Preloader/>}
               </div>
                <Users usersPage={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onSetCurrentPage={this.onSetCurrentPage}/>
            </>
    )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
