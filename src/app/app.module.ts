import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

// AppComponent is in CoreModule but used here for bootstrapping
import { AppComponent } from './core/containers/app';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
