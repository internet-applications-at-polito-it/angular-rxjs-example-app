import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';


import { LoginPageComponent } from './containers/login-page.component';
import { LoginFormComponent } from './components/login-form.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthEffects } from './effects/auth.effects';

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
    FormsModule,
    EffectsModule.forFeature( [AuthEffects] ),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [AuthService, AuthGuard],
})
export class AuthModule {

}
