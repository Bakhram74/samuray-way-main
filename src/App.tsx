import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Music, NavBar, News, Settings} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";


function App() {
    const dialogsHandler = () => <DialogsContainer />

    const profileHandler = () => <Profile/>
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>

                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs' render={dialogsHandler}/>
                    <Route path='/profile' render={profileHandler}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
