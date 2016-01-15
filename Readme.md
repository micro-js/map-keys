
# map-keys

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map the keys of an object.

## Installation

    $ npm install @f/map-keys

## Usage

```js
var mapKeys = require('@f/map-keys')

mapKeys(map, {foo: 'bar', qux: 'bat'}) // => {bar: 'bar', qux: 'bat'}

function map (key) {
  return key === 'foo' ? 'bar' : key
}
```

## API

### mapKeys(fn, obj)

- `fn` - mapping function
- `obj` - object to map keys of

**Returns:** an object whose keys have been mapped by `fn`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/map-keys.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/map-keys
[git-image]: https://img.shields.io/github/tag/micro-js/map-keys.svg
[git-url]: https://github.com/micro-js/map-keys
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/map-keys.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/map-keys
