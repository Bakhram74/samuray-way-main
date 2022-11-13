import React  from "react";
import {StoreType} from "./redux/store";
import store from "./redux/redux-store";


const StoreContext = React.createContext<StoreType>(store)

export default StoreContext