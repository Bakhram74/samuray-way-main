import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";

import {
    follow,
    getUsers, setCurrentPage,
    setFollowingAC, unFollow,


} from "../../redux/users_reducer/users-reducers";
import React from "react";
import {Users} from "./Users";
import Preloader from "../../common/preloader/Preloader";

const mapStateToProps = (state: AppStateType)=> {
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
    setCurrentPage,
    setFollowingAC,
    getUsers
}


class UsersContainer extends React.Component<HeaderProps> {

     componentDidMount() {
         this.props.getUsers(this.props.currentPage,this.props.usersOnPage)
     }

    onSetCurrentPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.usersOnPage)
        this.props.setCurrentPage(pageNumber)
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
const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(UsersContainer)
