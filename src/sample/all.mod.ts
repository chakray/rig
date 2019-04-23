import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTag } from './all.tag';

const routes: Routes = [{
  path: '',
  component: AllTag,
  children: [{
    path: 'signup',
    loadChildren: '@mod/sample/signup#CsSignupMod'
  }, {
    path: 'signin',
    loadChildren: '@mod/sample/signin#CsSigninMod'
  }, {
    path: 'signout',
    loadChildren: '@mod/sample/signout#CsSignoutMod'
  }]
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
