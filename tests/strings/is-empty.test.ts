import isEmptyString from 'strings/is-empty-string';

describe('isEmptyString', () => {
  it('should return true for empty value', () => {
    expect(isEmptyString('')).toBe(true);
  });
});
