import { Content as Model } from './content';

describe('Model: ' + Model.name, () => {
  let m: Model;
  describe('when construct with empty object', () => {
    it('run without errors', () => {
      m = new Model();
      expect(m.email.name).toEqual('Email');
    });
  });
  describe('when construct with partial object keys', () => {
    it('udpate email fields', () => {
      m = new Model({ tos: {}, google: { name: '' }, email: { name: 'p' } });
      expect(m.email.name).toEqual('p');
      expect(m.google.name).toEqual('');
    });
    it('update other fields', () => {
      m = new Model({ others: 1, github: { name: '' }, proceed: { text: '' }, phone: { name: 'p' } });
      expect(m.email.name).toEqual('Email');
      expect(m.phone.name).toEqual('p');
      expect(m.github.name).toEqual('');
      expect(m.proceed.text).toEqual('');
    });
  });
});
