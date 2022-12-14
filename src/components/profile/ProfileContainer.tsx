import React from "react";
import {Profile} from "./Profile";

import {connect, ConnectedProps} from "react-redux";
import {getUserProfile,} from "../../redux/profile_reducer/profile-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import { RouteComponentProps, withRouter} from 'react-router-dom';

import {withAuthRedirect} from "../../hok/withAuthReducer";



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

    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    getUserProfile
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type HeaderProps = ConnectedProps<typeof connector>


let authRedirectComponent = withAuthRedirect(ProfileContainer)

 const ProfileContainerWithUrl = withRouter(authRedirectComponent)
export default connector(ProfileContainerWithUrl)


