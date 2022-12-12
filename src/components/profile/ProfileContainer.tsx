import React from "react";
import {Profile} from "./Profile";

import {connect, ConnectedProps} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile_reducer/profile-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";


type PathParamsType = {
    userId: string
}

class ProfileContainer extends React.Component< HeaderProps & RouteComponentProps<PathParamsType> > {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
       this.props.getUserProfile(userId)

    }

    render() {
        if (!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}




const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
     getUserProfile
}

const ProfileContainerWithUrl = withRouter(ProfileContainer)
const connector = connect(mapStateToProps, mapDispatchToProps)
type HeaderProps = ConnectedProps<typeof connector>
export default connector(ProfileContainerWithUrl)


