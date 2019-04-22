import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as marked from 'marked';
import { CmMarkedMod, MarkedLib, mdLib } from '@chakray/marked';
import { AppLanderTag, AppSampleTag, AppDocTag, AppDocDetailTag } from './views';

export function mdFac() {
  return new MarkedLib(marked);
}

const routes: Routes = [{
  path: '',
  component: AppLanderTag
}, {
  path: 'sample',
  component: AppSampleTag,
  loadChildren: '@mod/sample#AllMod'
}, {
  path: 'docs',
  component: AppDocTag,
  children: [{
    path: '**',
    component: AppDocDetailTag,
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/docs/'
  }]
}];

@NgModule({
  declarations: [
    AppLanderTag,
    AppSampleTag,
    AppDocTag,
    AppDocDetailTag
  ],
  imports: [
    CmMarkedMod,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
