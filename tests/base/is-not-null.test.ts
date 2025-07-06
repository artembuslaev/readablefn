import isNotNull from 'base/is-not-null';

describe('isNull', () => {
  it('should return false for null value', () => {
    expect(isNotNull(null)).toBe(false);
  });
});
