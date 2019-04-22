import { Input, Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[cmEnroute]'
})
export class CmEnrouteAttr {
  @Input('cmEnroute') baseUrl = '';
  constructor(private el: ElementRef, private router: Router) { }
  @HostListener('click', ['$event'])
  public onClick(event) {
    const attr = event.target.getAttribute('href') || '';
    const m = attr.split('#');
    let href = m[0];
    const fragment = m[1];
    if (href.startsWith('http')) { return; }
    if (href.includes('..')) {
      const meg = href.split('/');
      const n = meg.reduce((r, k) => {
        return k === '..' ? r + 1 : r;
      }, 0);
      let seg = this.baseUrl.split('/');
      seg = seg.slice(0, seg.length - n);
      meg.splice(0, n);
      href = seg.join('/') + '/' + meg.join('/');
    } else {
      href = this.baseUrl + '/' + href;
    }
    if (event.target.tagName === 'A') {
      if (href) {
        this.router.navigate([href], { fragment });
      } else {
        this.router.navigate([], { fragment });
      }
      event.preventDefault();
    } else {
      return;
    }
  }
}
