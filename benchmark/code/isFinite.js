'use strict';

module.exports = function(arr) {
  var len = arr.length;
  var res = [];

  while (len--) {
    res.push(isNumber(arr[len]));
  }
  return res;
};

function isNumber(n) {
  return (!!(+n) && !Array.isArray(n)) && isFinite(n) || n === '0'|| n === 0;
}
