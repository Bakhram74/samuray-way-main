import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Music, NavBar, News, Settings} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";

function App(props:AppPropsType) {
    const state = props.store.getState()
    const dialogsHandler = () => <Dialogs state={state.dialogsPage}/>
    const profileHandler = ()=><Profile profilePage={state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>

                <div className={"app-wrapper-content"}>
                    <Route path='/dialogs' component={dialogsHandler}/>
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
    store:StoreType
}
export default App;
