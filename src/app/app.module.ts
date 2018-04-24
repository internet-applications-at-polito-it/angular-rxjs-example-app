import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';

// AppComponent is in CoreModule but used here for bootstrapping
import { AppComponent } from './core/containers/app';

// import other Modules
import { AuthModule } from './auth/auth.module';

// module routes definition
import { routes } from './routes';
import { reducers } from './app.reducer';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
            // .provideStore
    StoreModule.forRoot(reducers),
    AuthModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
