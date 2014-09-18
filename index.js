




module.exports = function(num) {
  if (typeof num === 'number') {
    return true;
  }

  if (num && typeof num == 'object' && Object.prototype.toString.call(num) == '[object Number]') {
    return true;
  }

  return false;
};


// var val = 1.12;
// var val = 'foo';

// function replaceVal(num) {
//   var re = new RegExp('(' + parseInt(num) + ')');
//   var ret = num.replace(re, '$1');
//   // if (isNaN(ret)) {

//   // }
//   return ret;
// }

// console.log('foo3'.replace(new RegExp('(' + parseInt('foo3') + ')'), '$1'));
// console.log(parseFloat('3foo'))
// console.log(replaceVal(val))
// console.log(!!(+5e3/1))
// console.log(!(parseInt(val) / 1 != parseInt(val)));
// console.log(isFinite('1'));
// console.log(parseInt('2'))
// console.log(parseInt('2.0'))
// console.log(parseFloat('3foo', 10) / 1.5)


// console.log(((parseInt(val) / 1) === parseInt(val)));

// console.log(isNaN(true)); // False. +true == 1.
// console.log(isNaN(false)); // False. +false == 0.

// console.log(isNaN('')); // False. +'' == 0.
// console.log(isNaN('5e3')); // False. +'5e3' == 5000.
// console.log(isNaN('Infinity')); // False. +'Infinity' == Infinity.
// console.log(isNaN('-Infinity')); // False. +'-Infinity' == -Infinity.

// console.log(isNaN([0])); // False. +[0] == 0.

// console.log(isNaN(new Date)); // False. +new Date == Current Time in Milliseconds.
// console.log(isNaN(new Date('Invalid Date'))); // True. The millisecond representation of
//                                  // invalid dates is `NaN`.

// console.log(isNaN({'valueOf': function(){ return 1; }})); // False.

/* There is recourse: in ECMAScript, `NaN` is the only non-reflexive value;
 * i.e., `NaN != NaN`. Thus, by definition, a value that is not equal to
 * itself must be `NaN`.
*/

// 0 / 0 != 0 / 0; // True. `0 / 0 == NaN`.

/* The Moral: Always use `A != A` to test for `NaN` values. */