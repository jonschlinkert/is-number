/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

// 'use strict';

var assert = require('assert');
// var isNumber = require('./');
var _ = require('lodash');

var pass = [
  0,
  '0',
  012,
  '012',
  1,
  '1',
  1.1,
  '1.1',
  -1.1,
  '-1.1',
  10,
  '10',
  10.10,
  '10.10',
  100,
  '100',
  Math.abs(1),
  Math.acos(1),
  Math.asin(1),
  Math.atan(1),
  Math.atan2(1, 2),
  Math.ceil(1),
  Math.cos(1),
  Math.E,
  Math.exp(1),
  Math.floor(1),
  Math.LN10,
  Math.LN2,
  Math.log(1),
  Math.LOG10E,
  Math.LOG2E,
  Math.max(1, 2),
  Math.min(1, 2),
  Math.PI,
  Math.pow(1, 2),
  Math.pow(5, 5),
  Math.random(1),
  Math.round(1),
  Math.sin(1),
  Math.sqrt(1),
  Math.SQRT1_2,
  Math.SQRT2,
  Math.tan(1),
  Number.MAX_VALUE,
  Number.MIN_VALUE,
  5e3,
  '5e3',
  0xff,
  '0xff',
  Infinity,
  'Infinity'
];


var fail = [
  '3abc',
  'abc',
  'abc3',
  [1, 2, 3],
  function () {},
  new Buffer('abc'),
  null,
  'null',
  'undefined',
  undefined,
  {abc: 'abc'},
  {}
];

var oddities = [
  new Array(), //=> `true`
  new Array(0), //=> `true`
  new Array(1), //=> `true`
];

// function isNumber(n) {
//   if (parseInt(n) === 0) {
//     return true;
//   }
//   return !!(+n/1);
// }

// function isNumber(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }w
function isNumber(n, finite) {
  // return (!!n && !!n+1) && !!(+n+1/1);
  // return n != null && !!(+n+1/1);
  // return n != null && ((finite ? isFinite(n) : !isNaN(n)) && !!(+n+1/1));
  // return n != null && isFinite(n) && !!(+n+1/1);
  return n != null && !!(+n+1/1);
}

describe('is a number', function () {
  pass.forEach(function (num) {
    it('"' + num + '" should be a number', function () {
      assert.equal(isNumber(num), true);
    });
  });
});

describe('is not a number', function () {
  fail.forEach(function (num) {
    it('"' + num + '" should not be a number', function () {
      assert.equal(isNumber(num), false);
    });
  });
});

console.log(Math.E)


// function foo() {
//   return [].splice.call(arguments, 1)
// }

// console.log(foo('a', 'b',))