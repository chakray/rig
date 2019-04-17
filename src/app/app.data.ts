import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AppData {
  title = 'RIG';
  constructor(title: Title) {
    title.setTitle(this.title);
  }
}
