import { MdLib } from './lib';

/**
 * wrapper for [marked.js](https://github.com/markedjs/marked)
 * see [[MdLib]] for common apis
 */
export class MarkedLib extends MdLib {
  /**
   * @param lib marked lib
   */
  constructor(private lib) {
    super();
  }

  /**
   * @param str markdown string
   * @return html string
   */
  parse(str: string): string {
    return this.lib(str);
  }
}
