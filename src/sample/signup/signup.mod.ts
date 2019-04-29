import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GateMod } from '@chakray/gate';

import { CssSignupTag } from './signup.tag';

const routes: Routes = [{
  path: '',
  component: CssSignupTag,
}];

@NgModule({
  imports: [
    GateMod,
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
