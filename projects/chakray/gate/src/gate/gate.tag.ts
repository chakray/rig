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
    this.use = v[0] || 'email';
  }
  get providers() {
    return this._providers;
  }
  @Output() event = new EventEmitter();
  _providers: string[] = [];
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
    if (this.notAgree) {
      console.error('please agree tos before continue', p);
      this.emit('notAgree');
      return;
    }
    console.log('enter', p, this.content.tos.read);
    this.use = p;
    this.emit('enter', { use: p });
  }
  wrongId() {
    this.id = null;
    if (this.lastLocker) {
      this.lastLocker.back();
    }
  }
  lockerEvt(key, { action: a, data: d }) {
    a = 'locker.' + a;
    if (a === 'locker.check') {
      this.id = d.id;
    }
    if (d.src) {
      this.lastLocker = d.src;
    }
    this.emit(a, { key, ...d });
  }
  private emit(action, data?) {
    console.log(action, data);
    this.event.emit({ action, data });
  }
}
