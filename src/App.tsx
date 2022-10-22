import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Music, NavBar, News, Settings} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter as Br, Route} from "react-router-dom";


function App(props: AppStateType) {
    const dialogsHandler = () => <Dialogs state={props.state.dialogsPage}/>

    const profileHandler = () => <Profile state={props.state.profilePage}/>
    return (
        <Br>
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
        </Br>


    );
}
type AppStateType = {
    state:StateType
}

export type StateType = {

    profilePage: {
        post: { id: number, message: string, likesCount: number }[]
    },
    dialogsPage: {
        dialogs: { name: string, id: number }[],
        messages: { id: number, message: string }[]
    },

}


export default App;
