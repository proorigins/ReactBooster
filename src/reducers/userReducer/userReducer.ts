import {createAction, handleActions} from 'redux-actions';
import {UserType} from "../../types/user.type";
import {UserReducerPayloadsType, UserReducerStateType} from "./userReducer.type";
import produce from "immer";
import {loadUserActionName, unloadUserActionName} from "./userReducerActions";

export const loadUser = createAction<UserType>(loadUserActionName);
export const unloadUser = createAction(unloadUserActionName);

export const userReducerInitialState : UserReducerStateType = {
    data: {
        email: null,
        firstName: ""
    },
    authenticated: false
};

const userReducer = handleActions<UserReducerStateType, UserReducerPayloadsType>(
  {
      [loadUserActionName]: (state, {payload}) => produce(state, draftState => {
          draftState.data = payload;
          draftState.authenticated = true;
      }),
      [unloadUserActionName]: (state, {payload}) => produce(state, draftState => {
          draftState.data = userReducerInitialState.data;
          draftState.authenticated = userReducerInitialState.authenticated
      }),
  },
    userReducerInitialState
);

export default userReducer;
