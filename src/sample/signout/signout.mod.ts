import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GateMod } from '@chakray/gate';

import { CssSignoutTag } from './signout.tag';

const routes: Routes = [{
  path: '',
  component: CssSignoutTag,
}];

@NgModule({
  imports: [
    GateMod,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CssSignoutTag
  ],
  exports: [
    RouterModule
  ]
})
export class CsSignoutMod { }
