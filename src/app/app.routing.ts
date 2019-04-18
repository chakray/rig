import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as marked from 'marked';
import { CmMarkedMod, MarkedLib, mdLib } from '@chakray/marked';
import { AppLanderTag, AppSampleTag, AppDocTag } from './views';

export function mdFac() {
  return new MarkedLib(marked);
}

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
    CmMarkedMod,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
