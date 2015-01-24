'use strict';

var isNumber = require('../..');

module.exports = function (val) {
  return isNumber(val) && !Array.isArray(val);
}
