import { Component } from '@angular/core';
import { Authenticate } from '../models/user.model'

@Component({
  selector: 'app-login-page',
  template: `
    <h2>Login form</h2>
    <app-login-form (submitted)=onSubmit($event)></app-login-form>
  `
})
export class LoginPageComponent {

  constructor () {}

  onSubmit($ev: Authenticate) {
    console.dir($ev);
    console.log('Form subitted values: ' + JSON.stringify($ev));
  }

}
