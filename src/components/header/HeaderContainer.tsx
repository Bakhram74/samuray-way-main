import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitAuthDataType, setUserDataAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
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


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
})
type MapStateToPropsType = {
    auth: InitAuthDataType
}
type MapDispatchToPropsType = {
    setUserDataAC: (auth: InitAuthDataType) => void
}
const mapDispatchToProps = {
        setUserDataAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)