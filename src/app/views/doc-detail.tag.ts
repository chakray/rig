import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from '../app.data';

@Component({
  selector: 'app-doc-detail',
  template: '<cm-marked [str]="mds" class="markdown-body"></cm-marked>',
})
export class AppDocDetailTag {
  mds = '';
  constructor(private route: ActivatedRoute,
              private dt: AppData) {
    route.params.subscribe(e => {
      let { seg } = e;
      seg = seg.replace(/-/gi, r => '/');
      const file = 'docs/' + (seg || 'README.md');
      this.load(file);
    });
  }

  private load(file) {
    this.dt.gh(file, 'gh-pages').subscribe(k => {
      this.mds = k.replace(/classes.+/gi, t => {
        t = t.replace(/\//gi, r => '-');
        return 'docs/' + t;
      });
    });
  }
}
