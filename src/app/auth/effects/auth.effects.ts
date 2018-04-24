import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

import * as AuthActions from '../actions/auth.action';
import { AuthActionTypes } from '../actions/auth.action';
import { Authenticate } from '../models/user.model';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: AuthActions.Login) => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService
        .login(auth)
        .pipe(
          map(user => new AuthActions.LoginSuccess({ user })),
          catchError(error => of(new AuthActions.LoginFailure(error)))
        )
    )
  );
}
