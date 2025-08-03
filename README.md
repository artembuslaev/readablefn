# readablefn

[![Publish Package](https://github.com/artembuslaev/readablefn/actions/workflows/publish.yml/badge.svg)](https://github.com/artembuslaev/readablefn/actions/workflows/publish.yml)

A lightweight library that provides simple validation and conversion JavaScript functions to make your code more intuitive and readable.

## Installation Guide

`npm install readablefn` - adds the library to your project.

Feel free to import the modules you need using `import` or `require`.

### Usage Example

```ts
import { isNotNull } from 'readablefn/base';
import { Numbers } from 'readablefn';

const value = 5;

if (isNotNull(value)&& Numbers.isNumber(value) && Numbers.inRange(value, { start: 1, end: 10 })) {
  console.log('Value is a valid number in range!');
}
```

## API Reference

### Base

| Function        | Description                                              | Example                      |
|-----------------|----------------------------------------------------------|------------------------------|
| [isNull](https://github.com/artembuslaev/readablefn/blob/main/tests/base/is-null.test.ts)          | Checks if value is `null` or `undefined`                 | `isNull(null)` -> true <br> `isNull(1)` -> false |
| [isNotNull](https://github.com/artembuslaev/readablefn/blob/main/tests/base/is-not-null.test.ts)   | Checks if value is not `null` or `undefined`             | `isNotNull(1)` -> true <br> `isNotNull(null)` -> false |
| [isUndefined](https://github.com/artembuslaev/readablefn/blob/main/tests/base/is-undefined.test.ts)| Checks if value is `undefined`                           | `isUndefined(undefined)` -> true <br> `isUndefined(0)` -> false |
| [isNotUndefined](https://github.com/artembuslaev/readablefn/blob/main/tests/base/is-not-undefined.test.ts) | Checks if value is not `undefined`                       | `isNotUndefined(1)` -> true <br> `isNotUndefined(undefined)` -> false |

### Strings

| Function        | Description                                              | Example                      |
|-----------------|----------------------------------------------------------|------------------------------|
| [isString](https://github.com/artembuslaev/readablefn/blob/main/tests/strings/is-string.test.ts)        | Checks if value is a string                              | `isString('abc')` -> true <br> `isString(123)` -> false |
| [isEmpty](https://github.com/artembuslaev/readablefn/blob/main/tests/strings/is-empty.test.ts)         | Checks if value is empty (`''`, `null`, `undefined`)     | `isEmpty('')` -> true <br> `isEmpty('abc')` -> false |
| [isNotEmpty](https://github.com/artembuslaev/readablefn/blob/main/tests/strings/is-not-empty.test.ts)      | Checks if value is not empty                             | `isNotEmpty('abc')` -> true <br> `isNotEmpty('')` -> false |

### Numbers

| Function        | Description                                              | Example                      |
|-----------------|----------------------------------------------------------|------------------------------|
| [isNumber](https://github.com/artembuslaev/readablefn/blob/main/tests/numbers/is-number.test.ts)        | Checks if value is a number (not NaN, not Infinity)      | `isNumber(5)` -> true <br> `isNumber('5')` -> false |
| [isNotNumber](https://github.com/artembuslaev/readablefn/blob/main/tests/numbers/is-not-number.test.ts) | Checks if value is not a number                          | `isNotNumber('abc')` -> true <br> `isNotNumber(5)` -> false |
| [inRange](https://github.com/artembuslaev/readablefn/blob/main/tests/numbers/in-range.test.ts)         | Checks if number is in the given range                   | `inRange(5, {start: 1, end: 10})` -> true <br> `inRange(0, {start: 1, end: 10})` -> false |

## Contributing

You are welcome to contribute to this library.

### Prerequisites

- Node.js with NPM

### Setup Guide

- `npm ci` - install dependencies
- `npm test` - run build and tests

> **_NOTE:_** Please submit your PRs to the `develop` branch.
