import { Loader as Target } from './loader';
import { Sdk } from './sdk';

describe(Target.name, () => {
  let target: Target;
  beforeEach(() => {
    target = new Target([], new Sdk());
  });
  it('should set debug to false', () => {
    expect(target.debug).toBe(false);
  });
});
