import {combineReducers} from "redux";
import infectedReducer from "./infected-reducer";

let reducers = combineReducers({
    infectedPage: infectedReducer,
});

export default reducers;