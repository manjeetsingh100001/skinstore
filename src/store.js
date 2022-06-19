import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Reducer from "./redux/reducer"

 export const Store=createStore(Reducer,applyMiddleware(thunk))