import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authAPI, InitAuthDataType, setUserDataAC} from "../../redux/auth_reducer/auth-reducer";
import {AppStateType} from "../../redux/store/redux-store";
class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
     this.props.authAPI()
    }
    render() {
        return (
            <Header {...this.props.auth}/>
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
    setUserDataAC: (auth: InitAuthDataType) => void
    authAPI:()=>void
}
const mapDispatchToProps:MapDispatchToPropsType = {
        setUserDataAC,
    authAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)