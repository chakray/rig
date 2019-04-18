import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AppData {
  title = 'RIG';
  constructor(private http: HttpClient,
              title: Title) {
    title.setTitle(this.title);
  }
  gh(file, branch = 'master') {
    const url = `https://raw.githubusercontent.com/chakray/rig/${branch}/${file}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
