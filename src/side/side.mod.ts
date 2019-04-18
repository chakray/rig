import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideTag } from './side.tag';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    SideTag
  ],
  exports: [
    SideTag
  ]
})
export class SideMod { }
