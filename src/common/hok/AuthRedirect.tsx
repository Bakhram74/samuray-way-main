import React, {ComponentType, ReactNode} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../store/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})
export function authRedirect<T>(Component:ComponentType<T>){
    const RedirectComponent = (props: MapStateToPropsType) => {
            const {isAuth, ...restProps} = props
            return props.isAuth ? <Component  {...restProps as T}/> : <Redirect to={'/login'}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}

