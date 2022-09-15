/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (num) {
  switch (typeof num) {
    case 'number':
      return num - num === 0;
    case 'string':
      if (num.trim() !== '')
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      return false;
    default:
      return false;
  }
};
