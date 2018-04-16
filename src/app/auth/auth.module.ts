import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { LoginPageComponent } from './containers/login-page.component';
import { LoginFormComponent } from './components/login-form.component';
import { AuthService } from './services/auth.service';

const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent },
    ]),
    FormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [AuthService],
})
export class AuthModule {

}
