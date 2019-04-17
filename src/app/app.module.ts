import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { FbcModule, ClientMod, fwApps, fwCore } from '@chakray/fbc';
import { fblib, apps } from './firebase.plug';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ClientMod.forRoot([
      { provide: fwCore, useFactory: fblib },
      { provide: fwApps, useValue: apps },
    ]),
    FbcModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
