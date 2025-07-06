import isNotEmptyString from 'strings/is-not-empty-string';

describe('isNotEmptyString', () => {
  it('should return false for empty value', () => {
    expect(isNotEmptyString('')).toBe(false);
  });
});
