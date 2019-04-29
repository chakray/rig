import { Tos } from './tos';

export class Content {
  set tos(v) {
    this._tos = v ? new Tos(v) : v;
  }
  get tos() {
    return this._tos;
  }
  _tos = new Tos();
  set email(v) {
    Object.assign(this._email, v);
  }
  get email() {
    return this._email;
  }
  _email = {
    name: 'Email',
    text: 'your email'
  };
  set phone(v) {
    Object.assign(this._phone, v);
  }
  get phone() {
    return this._phone;
  }
  _phone = {
    name: 'Phone',
  };
  set google(v) {
    Object.assign(this._google, v);
  }
  get google() {
    return this._google;
  }
  _google = {
    name: 'google'
  };
  set github(v) {
    Object.assign(this._github, v);
  }
  get github() {
    return this._github;
  }
  _github = {
    name: 'Github'
  };
  set proceed(v) {
    Object.assign(this._proceed, v);
  }
  get proceed() {
    return this._proceed;
  }
  _proceed = {
    text: 'You will be proceed as:',
    confirm: 'Not you?'
  };
  constructor(o = {}) {
    Object.keys(o).forEach(k => {
      if (!(k in this)) { return; }
      this[k] = o[k];
    });
  }
}
