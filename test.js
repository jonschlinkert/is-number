/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var isNumber = require('./');


var shouldPass = [
  0xff,
  5e3,
  0,
  -1.1,
  37,
  3.14,

  1,
  1.1,
  10,
  10.10,
  100,
  -100,

  '-1.1',
  '0',
  '012',
  '0xff',
  '1',
  '1.1',
  '10',
  '10.10',
  '100',
  '5e3',

  Math.LN2,
  Number(1),
  new Number(1),

  // 012, Octal literal not allowed in strict mode
  parseInt('012'),
  parseFloat('012'),
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
  Number.MIN_VALUE
];

var shouldFail = [
  '3abc',
  'abc',
  'abc3',
  'null',
  'undefined',
  [1, 2, 3],
  [1],
  [],
  function () {},
  Infinity,
  NaN,
  new Array('abc'),
  new Array(0),
  new Array(2),
  new Buffer('abc'),
  null,
  undefined,
  {abc: 'abc'},
  {},
];

describe('is a number', function () {
  shouldPass.forEach(function (num) {
    it('"' + JSON.stringify(num) + '" should be a number', function () {
      assert.equal(isNumber(num), true);
    });
  });
});

describe('is not a number', function () {
  shouldFail.forEach(function (num) {
    it('"' + JSON.stringify(num) + '" should not be a number', function () {
      assert.equal(isNumber(num), false);
    });
  });
});