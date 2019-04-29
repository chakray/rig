export class Tos {
  read = false;
  text = 'Please confirm before continue.';
  confirm = 'I agree';
  constructor(o = {}) {
    Object.assign(this, o);
  }
}
