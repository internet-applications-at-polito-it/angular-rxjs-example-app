import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './containers/app';

const COMPONENTS = [
  AppComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule { }
