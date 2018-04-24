import { Component } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../auth/auth.reducer';
import { User } from '../../auth/models/user.model';


@Component({
  selector: 'app-root',
  template: `
    <p>loggedIn: {{loggedIn$ | async}}</p>
    <p *ngIf="loggedIn$|async">User: {{(user$ | async)?.name}}</p>
    <hr/>
    <br/>
    <h1>Angular RxJS Example App</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  loggedIn$: Observable<boolean>;
  user$: Observable<User>;
  test: true;

  constructor(private store: Store<fromAuth.AuthState>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.user$ = this.store.pipe(select(fromAuth.getUser));
    console.dir(this.loggedIn$);
  }

}


