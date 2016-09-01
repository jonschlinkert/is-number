'use strict';

function isValid(val) {
  if (typeof val === 'string' || val instanceof String) {
    return val.length > 0; // we don't want empty strings
  }
  if (typeof val === 'number' || val instanceof Number) {
    return true;
  }
  return false;
}

function isNumber(num) {
  if (!isValid(num)) {
    return false;
  }
  var n = +num;
  return (n - n + 1) >= 0;
};

module.exports = function(arr) {
  var len = arr.length;
  var res = [];

  while (len--) {
    res.push(isNumber(arr[len]));
  }
  return res;
};




