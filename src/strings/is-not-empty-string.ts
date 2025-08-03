import isEmpty from './is-empty-string';

export default function (value: unknown): boolean {
  return !isEmpty(value);
}
