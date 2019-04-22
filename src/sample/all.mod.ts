import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTag } from './all.tag';

const routes: Routes = [{
  path: '',
  component: AllTag
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    AllTag
  ],
  exports: [
    RouterModule
  ]
})
export class AllMod { }
