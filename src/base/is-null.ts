import isUndefined from './is-undefined';

export default function(value: unknown): value is (null | undefined) {
  return isUndefined(value) || value === null;
}
