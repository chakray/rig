import { Spec } from '../testing';

import { Content } from './content';
import { CgGateTag as Tag } from './gate.tag';

Spec.outline(Tag, (r) => {
  let tag;
  beforeEach(() => {
    tag = r.tag;
  });
  r.prop('content', (v) => {
    it('will merge default values', () => {
      tag.content = {};
      expect(tag.content.tos).toBeTruthy();
    });
  });
  r.prop('providers', (v) => {
    describe('when keys in content like: ', () => {
      it('google', () => {
        tag.providers = ['google'];
        expect(tag.providers).toEqual(['google']);
      });
      it('google,email', () => {
        tag.providers = ['google', 'email'];
        expect(tag.providers).toEqual(['google', 'email']);
      });
    });
    describe('when keys contains unsupported strings: ', () => {
      it('google,others', () => {
        tag.providers = ['google', 'others'];
        expect(tag.providers).toEqual(['google']);
      });
    });
    describe('when email or phone is the first element', () => {
      it('email,google', () => {
        tag.providers = ['email', 'google'];
        expect(tag.use).toEqual('email');
      });
    });
  });
  r.prop('notAgree', (v) => {
    describe('when content.tos is object', () => {
      it('and tos.read is false', () => {
        tag.content.tos.read = false;
        r.equal(v, true);
      });
      it('and tos.read is true', () => {
        tag.content.tos.read = true;
        r.equal(v, false);
      });
    });
    describe('when content.tos is false', () => {
      it('has nothing could change', () => {
        tag.content.tos = false;
        r.equal(v, false);
      });
    });
  });
  r.fn('readTos', (fn) => {
    it('change tos.read to target.checked', () => {
      fn()({ target: { checked: false } });
      expect(tag.content.tos.read).toEqual(false);
    });
    it('change tos.read to target.checked', () => {
      fn()({ target: { checked: true } });
      expect(tag.content.tos.read).toEqual(true);
    });
  });
  r.fn('enter', (fn) => {
    let e;
    beforeEach(() => {
      e = null;
      tag.event.subscribe(k => {
        e = k;
      });
    });
    describe('when tag.notAgree', () => {
      beforeEach(() => {
        tag.content.tos.read = false;
      });
      it('emit error event', () => {
        fn()('provider');
        expect(e.action).toEqual('notAgree');
        expect(tag.error).toEqual(tag.content.tos.notAgree);
      });
    });
    describe('when tag.notAgree is false', () => {
      beforeEach(() => {
        tag.content.tos.read = true;
      });
      it('emit enter event', () => {
        fn()('provider');
        expect(e.action).toEqual('enter');
        expect(tag.use).toEqual('provider');
      });
    });
  });
  r.fn('wrongId', (fn) => {
    it('reset id/error', () => {
      fn()();
      expect(tag.id).toEqual(null);
      expect(tag.error).toEqual('');
    });
    describe('when lastLocker is set', () => {
      it('calls lastLocker.back', () => {
        let m = 0;
        tag.lastLocker = { back() { m = 1; } };
        fn()();
        expect(m).toEqual(1);
      });
    });
  });
  r.fn('lockerEvt', (fn) => {
    let spi;
    it('when action is "check", calls reset', () => {
      spi = spyOn(tag, 'reset').and.callThrough();
      fn()('provider', { action: 'check', data: { id: 1 } });
      expect(spi).toHaveBeenCalled();
    });
    it('when action is "error", set error to msg', () => {
      expect(tag.error).toEqual('');
      fn()('provider', { action: 'error', data: { msg: 'err' } });
      expect(tag.error).toEqual('err');
    });
    it('when action is "enter", calls enter', () => {
      spi = spyOn(tag, 'enter').and.callThrough();
      fn()('provider', { action: 'enter', data: { msg: 'err' } });
      expect(spi).toHaveBeenCalledWith('provider');
    });
    it('update lastLocker', () => {
      fn()('provider', { action: 'any', data: { tag: 'tag' } });
      expect(tag.lastLocker).toEqual('tag');
    });
  });
});
