import {ApplicationStateType} from "../applicationState/applicationState.type";
import {UserType} from "../../types/user.type";
import {UserReducerStateType} from "./userReducer.type";
import {defaultSelectorCreator} from "../defaultSelectorCreator";
import { createSelector } from "reselect";
import {Selector} from "react-redux";

const userSelector: Selector<ApplicationStateType, UserReducerStateType> = state => state.user;

export const userDataSelector = defaultSelectorCreator<ApplicationStateType, UserReducerStateType, UserType>(userSelector, user => user.data);
export const authenticatedSelector = createSelector<ApplicationStateType, UserReducerStateType, boolean>(userSelector, user => user.authenticated);
