import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GateModule } from '@chakray/gate';

import { CssSignoutTag } from './signout.tag';

const routes: Routes = [{
  path: '',
  component: CssSignoutTag,
}];

@NgModule({
  imports: [
    GateModule,
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
