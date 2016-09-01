/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');

module.exports = function isNumber(num) {
  if (!num && num !== 0) return false;

  var type = typeOf(num);
  if (type !== 'number' && type !== 'string') {
    return false;
  }
  if (type === 'string') {
    num = num.trim();
    if (!num.length) return false;
  }

  var n = +num;
  return (n - n + 1) >= 0;
};
