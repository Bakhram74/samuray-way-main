import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {StoreType} from "./redux/store";
// import store from "./redux/store";



export const rerenderTree = (store:StoreType)=>{
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}
rerenderTree(store)
store.subscribe(()=>{
    rerenderTree(store)
})
