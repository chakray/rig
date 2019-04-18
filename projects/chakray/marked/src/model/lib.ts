/**
 * common wrapper interface for markdown parser libraries
 */
export class MdLib {
  constructor() {}
  /**
   * @param str markdown string
   * @return html string
   */
  parse(str): string {
    return 'md - ' + str;
  }
}
