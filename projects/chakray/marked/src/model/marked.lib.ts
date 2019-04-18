import { MdLib } from './lib';

export class MarkedLib extends MdLib {
  constructor(private lib) {
    super();
  }
  parse(str) {
    return this.lib(str);
  }
}
