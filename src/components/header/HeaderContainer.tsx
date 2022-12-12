import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {InitAuthDataType, setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import {authMe} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authMe.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserDataAC(response.data.data)
                }
            })
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
}
const mapDispatchToProps = {
        setUserDataAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)