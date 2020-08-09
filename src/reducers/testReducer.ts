import {createAction, handleActions} from 'redux-actions';

export const testAction: any = createAction('test action');

export interface IInitialState {
}

const initialState = {
};

const testReducer = handleActions(
  {
      [testAction]: (state: any, {payload}: any) => ({
          ...state,
          ...payload
      }),
  },
  initialState,
);

export default testReducer;
