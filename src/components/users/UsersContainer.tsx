import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";

import {
    follow,
    setCurrentPage, setFollowingAC, setIsFetching, setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/users_reducer/users-reducers";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


type MapStateToPropsType = {
    usersPage: Array<UserType>
    usersOnPage: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:string[]
}
type MapDispatchToPropsType = {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setFollowingAC: (isFollowing: boolean,id:string) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users.users,
        usersOnPage: state.users.usersOnPage,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
       followingInProgress:state.users.followingInProgress
    }
}
const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setFollowingAC
}


class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI().getUsers(this.props.currentPage, this.props.usersOnPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onSetCurrentPage = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI().getUsers(pageNumber, this.props.usersOnPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {
        return (
            <>
                <div>
                    {this.props.isFetching && <Preloader/>}
                </div>
                <Users usersPage={this.props.usersPage}
                       currentPage={this.props.currentPage}
                       usersOnPage={this.props.usersOnPage}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onSetCurrentPage={this.onSetCurrentPage}
                       setFollowing={this.props.setFollowingAC}
                       followingInProgress={this.props.followingInProgress}
                />

            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
