/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');

module.exports = function isNumber(n) {
  var type = typeOf(n);
  if (type !== 'number' && type !== 'string') {
    return false;
  }
  return (+n - +n + 1) >= 0 && n !== '';
};
