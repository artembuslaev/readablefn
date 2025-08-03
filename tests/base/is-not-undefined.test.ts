import isNotUndefined from 'base/is-not-undefined';

describe('isNotUndefined', () => {
  it('should return false for undefined value', () => {
    expect(isNotUndefined(undefined)).toBe(false);
  });
});
