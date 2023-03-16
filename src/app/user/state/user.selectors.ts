import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getMarkUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);
