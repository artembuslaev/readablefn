import isNumber from './is-number';

type NotNumber<T> = T extends number ? never : T;

export default function<T>(value: T): value is NotNumber<T> {
  return !isNumber(value);
}
