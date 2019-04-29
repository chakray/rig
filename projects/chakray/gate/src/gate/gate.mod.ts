import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CgLockerTag } from './locker/locker.tag';
import { CgGateTag } from './gate.tag';

@NgModule({
  declarations: [
    CgLockerTag,
    CgGateTag],
  imports: [
    CommonModule
  ],
  exports: [
    CgGateTag]
})
export class GateMod { }
