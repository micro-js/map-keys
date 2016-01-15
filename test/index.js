/**
 * Imports
 */

var mapKeys = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should map keys', function (t) {
  var mapped = mapKeys(map, {foo: 'bar', qux: 'bat'})

  t.deepEqual(mapped, {bar: 'bar', qux: 'bat'})
  t.end()

  function map (key) {
    if (key === 'foo') {
      return 'bar'
    } else {
      return key
    }
  }
})
