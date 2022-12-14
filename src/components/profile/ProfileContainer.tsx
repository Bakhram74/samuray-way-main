import React, {ComponentType} from "react";
import {Profile} from "./Profile";

import {connect, ConnectedProps} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus,} from "../../redux/profile_reducer/profile-reducer";
import {AppStateType} from "../../store/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {authRedirect} from "../../common/hok/AuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
class ProfileContainer extends React.Component<HeaderProps & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = this.props.authorizedUserId

            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth:state.auth.isAuth,
    authorizedUserId:state.auth.id
})

const mapDispatchToProps = {
    getUserProfile,
    getUserStatus,
    updateStatus
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type HeaderProps = ConnectedProps<typeof connector>

 export default compose<ComponentType>(connector,withRouter,
     authRedirect
 )(ProfileContainer)
