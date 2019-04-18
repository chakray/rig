import { MdLib } from './lib';
import * as marked from 'marked';

export class MarkedLib extends MdLib {
  constructor(private lib: marked) {
    super();
  }
  parse(str) {
    return this.lib(str);
  }
}
