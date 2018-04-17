import { AuthActions, AuthActionTypes } from './actions/auth.action';
import { User } from './models/user.model';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AuthState {
  loggedIn: string;
  user: User | null;
}

export const initialState: AuthState = {
  loggedIn: 'none',
  user: null,
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  let retState = state;
  switch (action.type) {
    case AuthActionTypes.Login: {
       retState = { // properties with same name are overwritten
        ...state,
        loggedIn:  action.payload.username,
        user: { name: action.payload.username}, // dummy authentication
      };
    }
  }
  console.log('AuthReducer from ' + JSON.stringify(state) + ' to ' + JSON.stringify(retState));
  return retState;
}

export const getAuthState = (state): AuthState => { console.dir(state); return state.auth; };

/*
export const getLoggedIn = (state: AuthState) => {
  console.log('Selector getLoggedIn: ' + state.loggedIn);
  return state.loggedIn;
};
*/

export const getLoggedIn = createSelector(
  getAuthState,
  (state: AuthState) => { console.log('S: ' + state.loggedIn); return state.loggedIn; }
);

/*
createSelector(
  selectAuthState,
  (state: State) => state.loggedIn,
);
*/

