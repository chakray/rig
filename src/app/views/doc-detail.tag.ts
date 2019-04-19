import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from '../app.data';

@Component({
  selector: 'app-doc-detail',
  template: '<cm-marked [baseUrl]="base" [str]="mds" class="markdown-body"></cm-marked>',
})
export class AppDocDetailTag {
  mds = '';
  base = '/docs';
  constructor(private route: ActivatedRoute,
              private dt: AppData) {
    route.url.subscribe(url => {
      this.base = '/docs/' + url.slice(0, url.length - 1).join('/');
      const f = url.join('/') || 'README.md';
      this.load('docs/' + f);
    });
  }

  private load(file) {
    this.dt.gh(file, 'gh-pages').subscribe(k => {
      this.mds = k;
    });
  }
}
