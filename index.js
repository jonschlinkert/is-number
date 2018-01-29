/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function isNumber(num) {
  var type = typeof num;

  if (type === 'string') {
    // both a non-empty whitespace string and an empty string will be coerced to 0
    // with the logic below. By stripping whitespace we can guarantee a correct result.
    if (num.trim() === '') {
      return false;
    }
  } else if (type !== 'number') {
    return false;
  }

  return (num - num + 1) === 1;
};
