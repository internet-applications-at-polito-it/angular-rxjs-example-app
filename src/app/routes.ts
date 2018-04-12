import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page';
import { DummyComponent } from './core/containers/dummy';

export const routes: Routes = [
  { path: '', component: DummyComponent },
  { path: '**', component: NotFoundPageComponent },
];
