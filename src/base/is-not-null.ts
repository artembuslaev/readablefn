import isNull from './is-null';

export default function<T>(value: T): value is NonNullable<T> {
  return !isNull(value);
}
