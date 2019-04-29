import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GateMod } from '@chakray/gate';

import { CssSigninTag } from './signin.tag';

const routes: Routes = [{
  path: '',
  component: CssSigninTag,
}];

@NgModule({
  imports: [
    GateMod,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CssSigninTag
  ],
  exports: [
    RouterModule
  ]
})
export class CsSigninMod { }
