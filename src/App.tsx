import React, {Component,Suspense} from 'react';
import './App.css';
import {NavBar} from "./components/navBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
// import DialogsContainer from "./components/dialogs/DialogsContainer";

  // import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {initializeTC} from "./redux/app-reduser/app-reduser";
import {AppStateType, store} from "./store/redux-store";
import Preloader from "./common/preloader/Preloader";
import {WithSuspense} from "./common/hok/WithSuspense";
const DialogsContainer = React.lazy(()=> import("./components/dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));


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

                    <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>


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

const MainApp = connect(mapStateToProps,{initializeTC})(App);

export const SamuraiApp = ()=>{
  return  <BrowserRouter>
        <Provider store={store}>
            <MainApp/>
        </Provider>
    </BrowserRouter>
}
