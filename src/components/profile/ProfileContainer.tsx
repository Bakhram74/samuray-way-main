import React from "react";
import {Profile} from "./Profile";

import {connect, ConnectedProps} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
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
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}




const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps = {
     getUserProfile
}

const ProfileContainerWithUrl = withRouter(ProfileContainer)
const connector = connect(mapStateToProps, mapDispatchToProps)
type HeaderProps = ConnectedProps<typeof connector>
export default connector(ProfileContainerWithUrl)


