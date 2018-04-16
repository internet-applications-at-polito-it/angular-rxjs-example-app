import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// import * as Auth from '../actions/auth';
// import * as fromAuth from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    // private store: Store<fromAuth.State>
  ) {}

  canActivate(): Observable<boolean> {
    let ret = false;
    ret = (Math.floor(Math.random() * 2) === 0);
    console.log('Is authenticated: ' + ret);
    return of(ret);
    /*
    this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new Auth.LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
    */
  }
}
