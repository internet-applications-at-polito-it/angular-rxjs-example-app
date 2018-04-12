import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AppComponent } from './containers/app';
import { DummyComponent } from './containers/dummy';
import { NotFoundPageComponent } from './containers/not-found-page';

export const COMPONENTS = [
  AppComponent, DummyComponent, NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule { }
