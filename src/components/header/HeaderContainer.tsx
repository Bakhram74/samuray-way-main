import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import { InitAuthDataType, loginOut} from "../../redux/auth_reducer/auth-reducer";
import {AppStateType} from "../../store/redux-store";
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header logOut={this.props.loginOut} userData={this.props.auth}/>
        )
    }
}

type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    auth: InitAuthDataType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
})
type MapDispatchToPropsType = {
    loginOut:() =>void
}
const mapDispatchToProps:MapDispatchToPropsType = {
    loginOut
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)