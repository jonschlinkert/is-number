'use strict';

var isNumber = require('../..');

module.exports = function (val) {
  return isNumber(val) && isFinite(val);
}
