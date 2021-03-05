import {createStore, Store} from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {ApplicationStateType} from "../reducers/applicationState/applicationState.type";
import {applicationState} from "../reducers/applicationState/applicationState";

const store: Store<ApplicationStateType> = createStore(rootReducer, applicationState,composeWithDevTools());

export default store;
