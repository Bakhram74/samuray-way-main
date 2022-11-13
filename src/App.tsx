import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Music, NavBar, News, Settings} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import { StoreType} from "./redux/store";
import {DialogsComponent} from "./components/dialogs/DialogsComponent";

function App(props: AppPropsType) {
    const dialogsHandler = () => {
        return <DialogsComponent store={props.store}/>
    }
    const profileHandler = () =>
        <Profile store={props.store}/>
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

type AppPropsType = {
    store: StoreType
}
export default App;
