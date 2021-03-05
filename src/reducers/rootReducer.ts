import {combineReducers, Reducer} from "redux";
import userReducer from "./userReducer/userReducer";
import {ApplicationStateType} from "./applicationState/applicationState.type";

const rootReducer : Reducer<ApplicationStateType> = combineReducers<ApplicationStateType>({
   user: userReducer
});

export default rootReducer;
