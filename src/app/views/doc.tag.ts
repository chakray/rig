import { Component } from '@angular/core';

@Component({
  selector: 'app-doc',
  template: '<router-outlet></router-outlet>',
  styles: [`:host {
    display: block;
    padding: var(--gap-s);
  }`]
})
export class AppDocTag {
  constructor() {
  }
}
