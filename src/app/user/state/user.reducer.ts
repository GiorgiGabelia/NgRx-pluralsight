import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from 'src/app/state/app.state';

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

//Selectors
export const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getMarkUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);

//Reducer
export const userReducer = createReducer(
  initialState,
  on(createAction('[User] Mask Username'), (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
