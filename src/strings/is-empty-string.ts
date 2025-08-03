import { isNull } from '../base';

export default function (value: unknown): boolean {
  return isNull(value) || value === '';
}
