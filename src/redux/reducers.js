import {combineReducers} from "redux";
import infectedReducer from "./infected-reducer";
import chartReducer from "./chart-reducer";

let reducers = combineReducers({
    infectedPage: infectedReducer,
    checkChart: chartReducer
});

export default reducers;