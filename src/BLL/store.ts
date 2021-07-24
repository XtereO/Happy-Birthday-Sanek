import { combineReducers, createStore } from "redux";
import { desireReducer } from "./Reducers/desireReducer";
import { otherReducer } from "./Reducers/otherReducer";
import { reasonReducer } from "./Reducers/reasonReducer";
import { veryReducer } from "./Reducers/veryReducer";


//Create rootReducer 
let rootReducer=combineReducers({
    desire:desireReducer,
    very:veryReducer,
    reason:reasonReducer,
    other:otherReducer
})

//Take AppStateType
type RootReducerType=typeof rootReducer
export type AppStateType=ReturnType<RootReducerType>

//store
export let store=createStore(rootReducer)

