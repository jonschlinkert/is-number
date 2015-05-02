'use strict';

module.exports = function(arr) {
  var len = arr.length, isNum;
  while (len--) {
    var n = arr[len];
    isNum = !Array.isArray(n) && (n - parseFloat(n) + 1) >= 0;
  }
  return isNum;
};
