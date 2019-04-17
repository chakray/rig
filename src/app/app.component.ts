import { Component } from '@angular/core';
import { Loader } from '@chakray/fbc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'rig';
  constructor(private ld: Loader) {
    const app = ld.getApp('main');
    console.log('fw', app);
    // const auth = new Auth(app.auth());
    // auth.state.subscribe(u => {
    //   this.user = u;
    // });
  }
}
