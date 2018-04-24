import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../auth/auth.reducer';

@Component({
  selector: 'app-root',
  template: `
    <p>loggedIn: {{loggedIn$ | async}}</p>
    <hr/>
    <br/>
    <h1>Angular RxJS Example App</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromAuth.AuthState>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    console.dir(this.loggedIn$);
  }

}


