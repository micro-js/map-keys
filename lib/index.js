/**
 * Modules
 */

var values = require('@f/values')

/**
 * Expose mapKeys
 */

module.exports = mapKeys

/**
 * Map keys of an object
 * @param  {Function} fn  Map
 * @param  {Object}   obj
 * @return {Object}
 */

function mapKeys (fn, obj) {
  var keys = Object.keys(obj)
  var copy = {}
  for (var i = 0; i < keys.length; ++i) {
    copy[fn(keys[i])] = obj[keys[i]]
  }
  return copy
}
