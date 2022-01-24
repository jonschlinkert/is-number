/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const finite = Number.isFinite ? Number.isFinite : isFinite

module.exports = function(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return finite(+num);
  }
  if (typeof num === 'bigint') {
    return finite(Number(num))
  }
  return false;
};
