import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CmEnrouteAttr } from './enroute.attr';
import { CmMarkedTag } from './marked.tag';

/**
 * this module exports [[CmMarkedTag]] for template use
 */
@NgModule({
  declarations: [
    CmEnrouteAttr,
    CmMarkedTag],
  imports: [
    RouterModule
  ],
  exports: [
    RouterModule,
    CmMarkedTag]
})
export class CmMarkedMod { }
