export class Tos {
  read = false;
  text = 'Please confirm before continue.';
  notAgree = 'please agree tos before continue';
  confirm = 'I agree';
  constructor(o = {}) {
    Object.assign(this, o);
  }
}
