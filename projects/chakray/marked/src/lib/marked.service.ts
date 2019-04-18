import { Inject, Injectable, InjectionToken } from '@angular/core';
import { MdLib } from '../model';

export function mockMdLib() {
  return new MdLib();
}
export const mdLib = new InjectionToken<MdLib>('cm-mdlib', {
  providedIn: 'root',
  factory: mockMdLib
});

@Injectable({ providedIn: 'root' })
export class MarkedService {
  constructor(@Inject(mdLib) lib: MdLib) { }
}
