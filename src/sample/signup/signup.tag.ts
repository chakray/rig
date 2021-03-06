import { Component } from '@angular/core';

import { Gateway } from './gateway';
import { GateEventHandler } from './gate.event-handler';

@Component({
  selector: 'css-signup',
  templateUrl: './signup.tag.html'
})
export class CssSignupTag {
  msg = {
    tos: {
      text: 'Please agree these terms and service'
    },
    phone: {
      hint: 'tel'
    }
  };
  msgPv = {
    tos: false,
    google: {
      name: 'GooGle'
    },
    email: {
      hint: 'Email'
    },
  };
  msgNoTos = {
    tos: false,
    email: {
      hint: 'Your email'
    },
  };
  pds = [
    'email,phone,google'.split(','),
    'phone,google,github'.split(','),
    'email,google,github'.split(','),
    'google,email,github'.split(','),
    'notExist,email,github'.split(','),
  ];
  geh: GateEventHandler;
  constructor(private gw: Gateway) {
    this.geh = new GateEventHandler(gw);
  }
  gateEvent(e) {
    this.geh.handle(e);
  }
}
