function camelize(text, sep='.') {
  return text.split(sep)
      .map((w, i) => i > 0 ? w.replace(/./, m=> m.toUpperCase()) : w)
      .join('');
}

const actionList = ['lockerCheck'];

export class GateEventHandler {
  constructor() {}
  handle({ action: a, data: d }) {
    const f = camelize(a);
    if (!(f in this)) {
      console.log('event not handled', f, d);
      return;
    }
    this[f](d);
  }
  lockerCheck(d) {
    console.log('r', d)
    d.ok();
  }
}
