import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page';
import { DummyComponent } from './core/containers/dummy';

import { AuthGuard } from './auth/services/auth-guard.service';
import { PrivateComponent } from './core/containers/private';

export const routes: Routes = [
  { path: '', component: DummyComponent },
  {
    path: 'private', component: PrivateComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
