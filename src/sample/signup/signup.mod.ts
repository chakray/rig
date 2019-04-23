import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GateModule } from '@chakray/gate';

import { CssSignupTag } from './signup.tag';

const routes: Routes = [{
  path: '',
  component: CssSignupTag,
}];

@NgModule({
  imports: [
    GateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CssSignupTag
  ],
  exports: [
    RouterModule
  ]
})
export class CsSignupMod { }
