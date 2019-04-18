import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[cmEnroute]'
})
export class CmEnrouteAttr {
  constructor(private el: ElementRef, private router: Router) { }
  @HostListener('click', ['$event'])
  public onClick(event) {
    const attr = event.target.getAttribute('href') || '';
    const m = attr.split('#');
    let href = m[0];
    const fragment = m[1];
    if (href.startsWith('http')) { return; }
    if (!href.includes('/')) {
      href = '/docs/classes-' + href;
    }
    if (href.includes('../')) {
      href = href.replace('..', 'docs');
    }
    if (event.target.tagName === 'A') {
      this.router.navigate([href], { fragment });
      event.preventDefault();
    } else {
      return;
    }
  }
}
