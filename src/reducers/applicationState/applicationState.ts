import {ApplicationStateType} from "./applicationState.type";
import {userReducerInitialState} from "../userReducer/userReducer";

export const applicationState : ApplicationStateType = {
    user: userReducerInitialState
};
