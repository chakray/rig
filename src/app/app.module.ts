import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { FbcModule, ClientMod, fwApps, fwCore } from '@chakray/fbc';
import { fblib, apps } from './firebase.plug';

import { SideMod } from '@mod/side';
import { AppRouting } from './app.routing';
import { AppRoot } from './app.root';

@NgModule({
  declarations: [AppRoot],
  imports: [
    BrowserModule,
    ClientMod,
    AppRouting,
    FbcModule,
    SideMod,
  ],
  providers: [
    { provide: fwCore, useFactory: fblib },
    { provide: fwApps, useValue: apps },
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
