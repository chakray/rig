import { Spec } from '../../testing';

import { Locker } from './locker';
import { CgLockerTag as Tag } from './locker.tag';

Spec.outline(Tag, (r) => {
  let tag;
  beforeEach(() => {
    tag = r.tag;
  });
  r.prop('hints', () => {
    const m = new Locker();
    it('accept empty object', () => {
      tag.hints = {};
      r.hasSame('hint', m);
      r.hasSame('hintPass', m);
      r.hasSame('check', m);
      r.hasSame('enter', m);
      r.hasSame('resend', m);
    });
    it('accept partial keyed object', () => {
      const q = { hint: 'test test ' };
      tag.hints = q;
      r.hasSame('hint', q);
      r.hasSame('hintPass', m);
      r.hasSame('check', m);
      r.hasSame('enter', m);
      r.hasSame('resend', m);
    });
  });
  r.prop('pattern', (v) => {
    it('is email', () => {
      tag.pattern = 'email';
      r.equal(v, 'email');
    });
    it('is phone', () => {
      tag.pattern = 'phone';
      r.equal(v, 'tel');
    });
  });
  r.prop('src', (v) => {
    it('is this', () => {
      r.equal(v, tag);
    });
  });
  r.prop('params', (v) => {
    it('is object', () => {
      const k = Object.keys(v()).sort();
      expect(k).toEqual(['id', 'pass', 'src']);
    });
  });
  r.fn('keyDown', (fn) => {
    const mockEvent = { key: '', target: { checkValidity() { } } };
    describe('when action is "doCheck"', () => {
      let spi;
      beforeEach(() => {
        spi = spyOn(tag, 'doCheck').and.callThrough();
      });
      it('and key is "Enter"', () => {
        mockEvent.key = 'Enter';
        fn()(mockEvent, 'doCheck');
        expect(spi).toHaveBeenCalled();
      });
      it('and key is "others"', () => {
        mockEvent.key = undefined;
        fn()(mockEvent, 'doCheck');
        expect(spi).not.toHaveBeenCalled();
      });
    });
    it('when action is "notInList"', () => {
      fn()(mockEvent, 'notInList');
    });
  });
  r.fn('back', (fn) => {
    it('set step to 1', () => {
      tag.step = 2;
      expect(tag.step).toBe(2);
      fn()();
      expect(tag.step).toBe(1);
    });
  });
  r.fn('update', (fn) => {
    const input = { target: { value: 'aaa' } };
    it('set id to target.value', () => {
      tag.id = 'abcd';
      expect(tag.id).toBe('abcd');
      fn()('id', input);
      expect(tag.id).toBe('aaa');
    });
    it('set pass to target.value', () => {
      tag.pass = 'abcd';
      expect(tag.pass).toBe('abcd');
      fn()('pass', input);
      expect(tag.pass).toBe('aaa');
    });
  });
  r.fn('doResend', (fn) => {
    let e;
    beforeEach(() => {
      e = null;
      tag.event.subscribe(k => {
        e = k;
      });
    });
    it('emit event with action "resend"', () => {
      expect(e).toBeNull();
      fn()();
      expect(e.action).toEqual('resend');
    })
  });
  r.fn('doCheck', (fn) => {
    let valid = false;
    let e;
    const mockInput = { checkValidity() { return valid; } };
    beforeEach(() => {
      e = null;
      tag.event.subscribe(k => {
        e = k;
      });
    });
    it('when tag is valid', () => {
      valid = true;
      fn()(mockInput);
      expect(e.action).toEqual('check');
      e.data.ok();
      expect(tag.step).toEqual(2);
    })
    it('when tag is invalid', () => {
      valid = false;
      fn()(mockInput);
      expect(e.action).toEqual('error');
    })
  });
  r.fn('doEnter', (fn) => {
    let valid = false;
    let e;
    const mockInput = { checkValidity() { return valid; } };
    beforeEach(() => {
      e = null;
      tag.event.subscribe(k => {
        e = k;
      });
    });
    it('when tag is valid', () => {
      valid = true;
      fn()(mockInput);
      expect(e.action).toEqual('enter');
    })
    it('when tag is invalid', () => {
      valid = false;
      fn()(mockInput);
      expect(e.action).toEqual('error');
    })
  });
});
