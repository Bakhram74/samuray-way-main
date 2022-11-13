import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {StoreType} from "./redux/store";
import StoreContext from "./StoreContext";


export const rerenderTree = (store:StoreType)=>{

    ReactDOM.render(
        <StoreContext.Provider value={store}>
        <App/>
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}
rerenderTree(store)
store.subscribe(()=>{
    rerenderTree(store)
})
