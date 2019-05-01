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
  @Input()
  set pattern(v: any) {
    this._pattern = v === 'phone' ? 'tel' : v;
  }
  get pattern() {
    return this._pattern;
  }
  _pattern: 'email'|'tel' = 'email';
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
  keyDown(e, action) {
    const { key: k = '' } = e;
    if (k.toLowerCase() === 'enter') {
      this[action](e.target);
    }
  }
  back() {
    this.step = 1;
  }
  doCheck(tag) {
    if (!this.valid(tag)) { return; }
    const ok = () => { this.step = 2; };
    this.emit('check', { id: this.id, ok, tag: this });
  }
  doResend() {
    this.emit('resend', this.params);
  }
  doEnter(tag) {
    if (!this.valid(tag)) { return; }
    this.emit('enter', this.params);
  }
  idEvt(e) {
    this.update('id', e);
  }
  passEvt(e) {
    this.update('pass', e);
  }
  private valid(tag) {
    const cv = tag.checkValidity();
    if (!cv) {
      this.emit('error', { id: this.id, tag: this, msg: tag.validationMessage });
    }
    return cv;
  }
  private update(k, e) {
    this[k] = e.target.value;
  }
  private emit(action, data?) {
    this.event.emit({ action, data });
  }
}
