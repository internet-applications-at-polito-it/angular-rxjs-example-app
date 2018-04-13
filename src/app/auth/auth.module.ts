import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './containers/login-page';


const COMPONENTS = [ LoginPageComponent ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent },
    ]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {

}
