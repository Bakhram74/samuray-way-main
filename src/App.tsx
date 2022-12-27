import React, {Component} from 'react';
import './App.css';
import {NavBar} from "./components/navBar/NavBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {initializeTC} from "./redux/app-reduser/app-reduser";
import {AppStateType} from "./store/redux-store";
import Preloader from "./common/preloader/Preloader";


class App extends Component<AppPropsType>{
    componentDidMount() {
        this.props.initializeTC()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><Login/>}/>
                </div>
            </div>
        );
    }
}
type MapDispatchToPropsType = {
    initializeTC:()=>void
}
type MapStateToPropsType = {
    initialized:boolean
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized:state.app.initialized
})

export default connect(mapStateToProps,{initializeTC})(App);
