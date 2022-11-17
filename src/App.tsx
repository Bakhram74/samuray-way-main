import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import { NavBar,} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import { Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";


function App() {

    return (

            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                    <Route path='/profile' render={()=><Profile/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                </div>
            </div>


    );
}

export default App;
