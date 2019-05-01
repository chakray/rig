import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Ref } from './ref';

export class Spec {
  static outline(K, fn) {
    const ref = new Ref();
    describe(K.name, () => {
      beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          schemas: [NO_ERRORS_SCHEMA],
          declarations: [K],
        }).compileComponents();
        ref.fixture = TestBed.createComponent(K);
        ref.tag = ref.fixture.debugElement.componentInstance;
      }));
      it('is creatable', () => {
        expect(ref.tag).toBeTruthy();
      });
      fn(ref);
    });
  }
}
