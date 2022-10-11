import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Music, NavBar, News, Settings} from "./components/navBar/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter as Br,Route} from "react-router-dom";


function App() {
    return (
    <Br>
        <div className={"app-wrapper"}>
            <Header/>
            <NavBar/>
            <div className={"app-wrapper-content"}>
          <Route  path='/dialogs'  component={Dialogs}/>
          <Route path='/profile'  component={Profile}/>
          <Route path='/news'  component={News}/>
          <Route path='/music'  component={Music}/>
          <Route path='/settings'  component={Settings}/>

            </div>
        </div>


    </Br>
    );
}

export default App;
