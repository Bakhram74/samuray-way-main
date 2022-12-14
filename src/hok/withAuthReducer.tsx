import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/store/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForAuth = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component:any) =>{
    class RedirectComponent extends React.Component<any>{
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    return  connect(mapStateToPropsForAuth)(RedirectComponent)
}





