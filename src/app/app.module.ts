import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FbcModule } from '@chakray/fbc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FbcModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
