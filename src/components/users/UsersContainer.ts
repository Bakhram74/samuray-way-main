import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersPageType,
    UserType
} from "../../redux/users_reducer/users-reducers";
import {Users} from "./Users";


type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
type MapDispatchToPropsType = {
    follow: (id:number)=>void
    unFollow: (id:number)=>void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>{
    return{
        usersPage: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
       follow: (id:number)=>{
           dispatch(followAC(id))
       },
        unFollow: (id:number)=>{
            dispatch(unFollowAC(id))
        },
        setUsers:(users:Array<UserType>)=>{
          dispatch( setUsersAC(users))
        },
        setCurrentPage:(currentPage:number)=>{
           dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
           dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)