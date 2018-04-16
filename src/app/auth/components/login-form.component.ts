import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authenticate } from '../models/user.model';

@Component({
  selector: 'app-login-form',
  template: `
        <form #ngF="ngForm" (ngSubmit)="submit(ngF)">
              <input type="text" placeholder="username" name="username" ngModel>
              <input type="password" placeholder="password" name="password" ngModel>
            <button [disabled]="pending" type="submit">Login</button>
        </form>
        <p>{{errorMessage}}
  `,
})
export class LoginFormComponent {
  /*
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  */

  @Input() pending: boolean | false;

  // @Input() errorMessage: string | null;

  // @Output() submitted = new EventEmitter<Authenticate>();
  @Output() submitted = new EventEmitter<Authenticate>();

  /*
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  */

  constructor() {}

  submit(f: NgForm) {
    // console.log(this.form.valid); ??
    console.log(f);
    this.submitted.emit(f.form.value);
  }
}
