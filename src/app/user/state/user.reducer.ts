import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from 'src/app/state/app.state';
import * as UserActions from './user.actions';

//Interfaces
export interface State extends AppState.State {
  users: UserState;
}
export interface UserState {
  maskUserName: boolean;
}

//Initial state
const initialState: UserState = {
  maskUserName: false,
};

//Reducer
export const userReducer = createReducer(
  initialState,
  on(UserActions.maskUserName, (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
