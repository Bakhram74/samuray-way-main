import React from 'react';
import './App.css';
import {NavBar} from "./components/navBar/NavBar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";


function App() {
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

export default App;
