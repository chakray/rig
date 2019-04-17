import { Component } from '@angular/core';
import { Loader } from '@chakray/fbc';
import { AppData } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.sass']
})
export class AppRoot {
  get title() {
    return this.dt.title;
  }
  constructor(private dt: AppData,
              private ld: Loader) {
    const app = ld.getApp('main');
    console.log('fw', app);
    // const auth = new Auth(app.auth());
    // auth.state.subscribe(u => {
    //   this.user = u;
    // });
  }
}
