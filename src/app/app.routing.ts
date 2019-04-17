import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLanderTag, AppSampleTag, AppDocTag } from './views';

const routes: Routes = [{
  path: '',
  component: AppLanderTag
}, {
  path: 'sample',
  component: AppSampleTag
}, {
  path: 'doc',
  component: AppDocTag
}];

@NgModule({
  declarations: [
    AppLanderTag,
    AppSampleTag,
    AppDocTag
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
