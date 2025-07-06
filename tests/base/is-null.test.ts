import isNull from 'base/is-null';

describe('isNull', () => {
  it('should return true for null value', () => {
    expect(isNull(null)).toBe(true);
  });
});
