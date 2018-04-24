import { AuthActions, AuthActionTypes } from './actions/auth.action';
import { User } from './models/user.model';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AuthState {
  loggedIn: boolean;
  user: User | null;
  error: string | null;
  pending: boolean;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
  error: null,
  pending: false,
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  let retState = state;
  switch (action.type) {

    // use Object.assign()
    case AuthActionTypes.Login: {
       retState = { // properties with same name are overwritten
        ...state,
        error: null,
        pending: true,
        // loggedIn:  action.payload.username,
        // user: { name: action.payload.username}, // dummy authentication
      };
    }
    break;

    case AuthActionTypes.LoginSuccess: {
      retState = { // properties with same name are overwritten
       ...state,
       error: null,
       pending: false,
       loggedIn:  true,
       user: action.payload.user, // dummy authentication
      };
    }
    break;

    case AuthActionTypes.LoginFailure: {
      retState = {
        ...state,
        error: action.payload,
        pending: false,
      };
    }
    break;

    case AuthActionTypes.Logout: {
      retState = initialState;
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

export const getLoginPageError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);
export const getLoginPagePending = createSelector(
  getAuthState,
  (state: AuthState) => state.pending
);


/*
createSelector(
  selectAuthState,
  (state: State) => state.loggedIn,
);
*/

