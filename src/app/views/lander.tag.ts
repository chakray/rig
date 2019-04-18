import { Component } from '@angular/core';
import { AppData } from '../app.data';

@Component({
  selector: 'app-lander',
  template: '<cm-marked [str]="mds" class="markdown-body"></cm-marked>',
  styleUrls: ['./lander.tag.sass']
})
export class AppLanderTag {
  mds = '*hello world*\n ## yooo';
  constructor(private dt: AppData) {
    dt.gh('README.md').subscribe(k => {
      this.mds = k;
    });
  }
}
