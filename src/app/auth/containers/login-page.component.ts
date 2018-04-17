import { Component, OnInit } from '@angular/core';
import { Authenticate } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromAuth from '../auth.reducer';
import * as Auth from '../actions/auth.action';

@Component({
  selector: 'app-login-page',
  template: `
    <h2>Login form</h2>
    <app-login-form
      (submitted)=onSubmit($event)
      [pending] = "pending"
    ></app-login-form>
  `
})
export class LoginPageComponent implements OnInit {
  pending = false;
  returnUrl: string;

  constructor (
    private authenticationService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromAuth.AuthState>,
  ) {

  }

  ngOnInit() {
    console.log('LoginPageComponent init');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit($ev: Authenticate) {
    console.dir($ev);
    this.store.dispatch(new Auth.Login($ev));
    /*
    this.pending = true;
    console.log('Form subitted values: ' + JSON.stringify($ev));
    this.authenticationService.login($ev)
      .subscribe(
        data => {
          console.log('Authenticated: ' + JSON.stringify(data));
          // this.router.navigate([this.returnUrl]);
          this.pending = false;
        },
        error => {
          console.log('Authentication error: ' + error);
          this.pending = false;
        }
      );
    */
  }

}
