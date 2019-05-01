import { TestBed, fakeAsync } from '@angular/core/testing';

class Ref {
  tag: any;
  fixture: any;
  // [key: string]: any;
  hasSame(key, obj) {
    expect(this.tag[key]).toEqual(obj[key]);
  }
  fn(k, fn) {
    describe(`.${k}`, () => {
      fn(() => this.tag[k].bind(this.tag));
    });
  }
  prop(k, fn) {
    describe(`.${k}`, () => {
      fn(() => this.tag[k]);
    });
  }
  equal(v, cmp) {
    expect(v()).toEqual(cmp);
  }
}

export class Spec {
  static outline(K, fn) {
    const ref = new Ref();
    describe(K.name, () => {
      beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
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
