import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Content } from './content';

@Component({
  selector: 'cg-gate',
  templateUrl: './gate.tag.html',
  styleUrls: ['./gate.tag.sass']
})
export class CgGateTag {
  // TODO add implicit TOS
  // @Input() implicitTos = false;
  @Input() set content(v) {
    this._content = new Content(v);
  }
  get content() {
    return this._content;
  }
  private _content = new Content();
  @Input() set providers(v) {
    v = v.filter(k => k in this.content);
    this._providers = v;
    if (['phone', 'email'].includes(v[0])) {
      this.use = v[0];
    }
  }
  get providers() {
    return this._providers;
  }
  @Output() event = new EventEmitter();
  _providers: string[] = [];
  error = '';
  use: string;
  id: string;
  lastLocker;
  get notAgree() {
    const { tos } = this.content;
    return tos && !tos.read;
  }
  constructor() { }
  readTos(e) {
    this.content.tos.read = e.target.checked;
  }
  enter(p) {
    const k = 'notAgree';
    if (this[k]) {
      this.error = this.content.tos[k];
      this.emit(k);
      return;
    }
    this.use = p;
    this.emit('enter', { use: p, tag: this });
  }
  wrongId() {
    this.reset(null);
    if (this.lastLocker) {
      this.lastLocker.back();
    }
  }
  lockerEvt(key, { action: a, data: d }) {
    if (a === 'check') {
      this.reset(d.id);
    }
    if (a === 'error') {
      this.error = d.msg;
    }
    if (a === 'enter') {
      this.enter(key);
    }
    if (d.tag) {
      this.lastLocker = d.tag;
    }
    this.emit('locker.' + a, { key, ...d });
  }
  private reset(id) {
    this.id = id;
    this.error = '';
  }
  private emit(action, data?) {
    // console.log(action, data);
    this.event.emit({ action, data });
  }
}
