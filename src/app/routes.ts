import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page';
import { DummyComponent } from './core/containers/dummy';

import { AuthGuard } from './auth/services/auth-guard.service';

export const routes: Routes = [
  { path: '', component: DummyComponent },
  {
    path: 'private', component: DummyComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
