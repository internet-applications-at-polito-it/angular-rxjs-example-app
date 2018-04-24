import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { timer } from 'rxjs/observable/timer';
import { delay, concat } from 'rxjs/operators';

import { User, Authenticate } from '../models/user.model';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AuthService {
  user: User = null;

  constructor() {}

  public isAuthenticated(): boolean {
    console.log('Authenticated as: ' + this.user);
    return !!this.user;
  }

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return _throw('Invalid username or password');
    }

    // force 5s delay
    this.user = { name: 'my user' };
    const sourceOne = of(this.user) ;
    return sourceOne.pipe(delay(5000));
  }

  logout() {
    return of(true);
  }
}
