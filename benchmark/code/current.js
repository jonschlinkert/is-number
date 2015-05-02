'use strict';

var isNumber = require('../..');

module.exports = function(arr) {
  var len = arr.length;
  var res = [];

  while (len--) {
    res.push(isNumber(arr[len]));
  }
  return res;
};
