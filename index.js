/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function isNumber(num) {
  var type = typeof num;

  return (type === 'string' || type === 'number') && (num - num) === 0;
}
