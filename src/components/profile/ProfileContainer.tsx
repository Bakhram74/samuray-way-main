import React, {ComponentType, FunctionComponent} from "react";
import {Profile} from "./Profile";

import {connect, ConnectedProps} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus,} from "../../redux/profile_reducer/profile-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {authRedirect} from "../../common/hok/AuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
class ProfileContainer extends React.Component<HeaderProps & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
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
