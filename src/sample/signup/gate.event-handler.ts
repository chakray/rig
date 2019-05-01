import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gateway } from './gateway';

function camelize(text, sep = '.') {
  return text.split(sep)
    .map((w, i) => i > 0 ? w.replace(/./, m => m.toUpperCase()) : w)
    .join('');
}

export class GateEventHandler {
  constructor(private gw: Gateway) { }
  handle({ action: a, data: d }) {
    const f = camelize(a);
    if (!(f in this)) {
      // console.log('event not handled', f, d);
      return;
    }
    this[f](d);
  }
  lockerResend({ key, id }) {
    this.gw.renew(key, id).subscribe(e => {
      console.log('please check your inbox with the new token');
    });
  }
  lockerEnter({ key, id, pass }) {
    console.log('enter with params', key, id, pass)
    this.gw.unlock(key, { id, pass }).subscribe(e => {
      console.log('logged in with', id);
    });
  }
  lockerCheck({ key, id, ok, tag }) {
    this.gw.identify(key, id).subscribe(e => {
      ok();
    });
  }
  enter({ tag, use: key }) {
    this.gw.unlock(key).pipe(catchError((e) => {
      tag.error = key === 'google' ? 'wrong wrong wrong' : null;
      return throwError(e);
    })).subscribe(e => {
      console.log('logged in with', key);
    });
  }
}
