import { combineReducers, createStore } from "redux";
import { ProfileReducer } from "./profile-reducer";
import { DialogReducer } from "./dialog-reducer";
let reducers = combineReducers({ ProfilePage:ProfileReducer, DialogPage:DialogReducer });

const store = createStore(reducers);

export type StoreType  = ReturnType<typeof reducers>

export default store;
