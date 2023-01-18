import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {SamuraiApp} from './App';
import {store} from "./store/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

export const rerenderTree = ()=>{

    ReactDOM.render(
       <SamuraiApp/>
       ,
        document.getElementById('root')

    );
}
rerenderTree()
store.subscribe(()=>{
    rerenderTree()
})
