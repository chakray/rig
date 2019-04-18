import { HostBinding, Input, Component, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { mdLib } from './marked.service';
import { MdLib } from '../model';

@Component({
  selector: 'cm-marked',
  templateUrl: './marked.tag.html',
  styleUrls: ['./marked.tag.sass']
})
export class CmMarkedTag {
  @Input() set str(v) {
    this._str = v;
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.lib.parse(v));
  }
  @HostBinding('innerHtml') html: SafeHtml;
  private _str = '';
  constructor(private sanitizer: DomSanitizer,
              @Inject(mdLib) private lib: MdLib) { }
}
