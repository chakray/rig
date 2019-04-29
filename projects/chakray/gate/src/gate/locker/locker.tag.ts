import { Input, Component, Output, EventEmitter } from '@angular/core';

import { Locker } from './locker';

@Component({
  selector: 'cg-locker',
  templateUrl: './locker.tag.html',
  styleUrls: ['./locker.tag.sass']
})
export class CgLockerTag extends Locker {
  @Input() set hints(v) {
    const ks = Object.keys(new Locker());
    v = typeof(v) === 'object' ? v : {};
    ks.forEach(k => {
      if (!(k in v)) { return; }
      this[k] = v[k];
    });
  }
  @Input() pattern: 'email'|'phone' = 'email';
  @Output() event = new EventEmitter();
  passMode: 'password'|'text' = 'password';
  id = '';
  pass = '';
  step = 1;
  get src() {
    return this;
  }
  get params() {
    return ['src', 'id', 'pass'].reduce((r, k) => {
      r[k] = this[k];
      return r;
    }, {});
  }
  constructor() {
    super();
  }
  back() {
    this.step = 1;
  }
  doCheck() {
    const ok = () => { this.step = 2; };
    this.emit('check', { id: this.id, ok, src: this });
  }
  doResend() {
    this.emit('resend', this.params);
  }
  doEnter() {
    this.emit('enter', this.params);
  }
  idEvt(e) {
    this.update('id', e);
  }
  passEvt(e) {
    this.update('pass', e);
  }
  private update(k, e) {
    this[k] = e.target.value;
  }
  private emit(action, data?) {
    this.event.emit({ action, data });
  }
}
