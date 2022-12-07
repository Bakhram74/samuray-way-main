import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, useParams, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId:string
}

class ProfileContainer extends React.Component<ProfilePropsType & RouteComponentProps<PathParamsType>> {

    componentDidMount() {
     let userId = this.props.match.params.userId;
     if (!userId){
         userId = '2'
     }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
            .then(response=>{
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}
 export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType ={
    setUserProfile:(profile:ProfileType)=>void
}
type MapStateToPropsType = {
    profile:ProfileType|null
}
const mapStateToProps = (state:AppStateType):MapStateToPropsType=>({
profile:state.profilePage.profile
})
const mapDispatchToProps ={
    setUserProfile
}

const ComponentProfileContainerWithUrl = withRouter(ProfileContainer)
export default  connect(mapStateToProps, mapDispatchToProps)(ComponentProfileContainerWithUrl)