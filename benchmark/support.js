// console.log('+new Array() //=> ', +new Array());
// console.log('+new Array(0) //=> ', +new Array(0));
// console.log('new Array(0) //=> ', new Array(0));
// console.log('new Array(0)+1 //=> ', new Array(0)+1);
// console.log('+new Array(1) //=> ', +new Array(1));
// console.log('new Array(1)+1 //=> ', new Array(1)+1);
// console.log('+new Array(1)+1 //=> ', +new Array(1)+1);
// console.log('+new Array(2) //=> ', +new Array(2));
// console.log('+new Array(2)+1 //=> ', +new Array(2)+1);
// console.log('+new Array(100)+1 //=> ', +new Array(100)+1);
// console.log('typeof (+new Array(100)+1) === "number" //=> ', typeof (+new Array(100)+1) === 'number');

// console.log('isFinite(+new Array()) //=> ', isFinite(+new Array()))
// console.log('isFinite(+new Array(0)) //=> ', isFinite(+new Array(0)))
// console.log('isFinite(new Array(0)) //=> ', isFinite(new Array(0)))
// console.log('isFinite(new Array(0)+1) //=> ', isFinite(new Array(0)+1))
// console.log('isFinite(+new Array(1)) //=> ', isFinite(+new Array(1)))
// console.log('isFinite(new Array(1)+1) //=> ', isFinite(new Array(1)+1))
// console.log('isFinite(+new Array(1)+1) //=> ', isFinite(+new Array(1)+1))
// console.log('isFinite(+new Array(2)) //=> ', isFinite(+new Array(2)))
// console.log('isFinite(+new Array(2)+1) //=> ', isFinite(+new Array(2)+1))
// console.log('isFinite(+new Array(100)+1) //=> ', isFinite(+new Array(100)+1))
// console.log('isFinite(typeof (+new Array(100)+1) === "number") //=> ', isFinite(typeof (+new Array(100)+1) === 'number'))


// // Numbers
// typeof 37 === 'number';
// typeof 3.14 === 'number';
// typeof Math.LN2 === 'number';
// typeof Infinity === 'number';
// typeof NaN === 'number'; // Despite being "Not-A-Number"
// typeof Number(1) === 'number'; // but never use this form!


// // Strings
// typeof "" === 'string';
// typeof "bla" === 'string';
// typeof (typeof 1) === 'string'; // typeof always return a string
// typeof String("abc") === 'string'; // but never use this form!


// // Booleans
// typeof true === 'boolean';
// typeof false === 'boolean';
// typeof Boolean(true) === 'boolean'; // but never use this form!


// // Symbols
// typeof Symbol() === 'symbol'
// typeof Symbol('foo') === 'symbol'
// typeof Symbol.iterator === 'symbol'


// // Undefined
// typeof undefined === 'undefined';
// typeof blabla === 'undefined'; // an undefined variable


// // Objects
// typeof {a:1} === 'object';

// // use Array.isArray or Object.prototype.toString.call
// // to differentiate regular objects from arrays
// typeof [1, 2, 4] === 'object';

// typeof new Date() === 'object';


// // The following is confusing. Don't use!
// typeof new Boolean(true) === 'object';
// typeof new Number(1) === 'object';
// typeof new String("abc") === 'object';


// // Functions
// typeof function(){} === 'function';
// typeof Math.sin === 'function';

// =======================

// Numbers
console.log(typeof +37)
console.log(typeof +3.14)
console.log(typeof +Math.LN2)
console.log(typeof +Infinity)
console.log(typeof +NaN)
console.log(typeof +Number(1))


// Strings
console.log(typeof +'')
console.log(typeof +'foo')
console.log(typeof +(typeof 1))
console.log(typeof +(typeof 'foo'))
console.log(typeof +String('foo'))
console.log(typeof +String(100))

// Booleans
console.log(typeof +true)
console.log(typeof +false)
console.log(typeof +Boolean(true))
// Undefined
console.log(typeof +undefined)
// console.log(typeof +blabla)


// Objects
console.log(typeof +{a:1})

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
console.log(typeof +[1, 2, 4])

console.log(typeof +new Date())


// The following is confusing. Don't use!
console.log(typeof +new Boolean(true))
console.log(typeof +new Number(1))
console.log(typeof +new String("abc"))


// Functions
console.log(typeof +function(){})
console.log(typeof +Math.sin)




// console.log(typeof +'foo')

// console.log(-new Date)
// console.log(-new Date())


console.log(1 + null)
console.log(1 + +null)
console.log(1 + null + '2')
console.log(1 + null + 2)
console.log(+null + +null)

console.log(1 + +false)
console.log(1 + false)
console.log(1 + true)
console.log(1 + +true)

console.log(false + false)
console.log(+false + false)
console.log(+false + +false)

console.log(false + null)
console.log(+false + null)
console.log(+false + +null)

console.log(true + true)
console.log(+true + true)
console.log(+true + +true)

console.log(true + false)
console.log(+true + false)
console.log(+true + +false)
console.log(+true + +null)


// console.log(1 + 2) // 3
// console.log(true + 1)
// console.log(false + false)
// console.log(5 + 'abc')
// console.log('abc' + false)
// console.log('abc' + 'bar')
// console.log(+1 + 2) // 3
// console.log(+true + 1)
// console.log(+false + false)
// console.log(+5 + 'abc')
// console.log(+'abc' + false)
// console.log(+'abc' + 'bar')
// console.log(typeof (+1 + 2) === 'number')
// console.log(typeof (+true + 1) === 'number')
// console.log(typeof (+false + false) === 'number')
// console.log(typeof (+5 + 'abc') === 'number')
// console.log(typeof (+'abc' + false) === 'number')
// console.log(typeof (+'abc' + 'bar') === 'number')

console.log(typeof -true) //=> 'number'
console.log(typeof -false) //=> 'number'
console.log(typeof -null) //=> 'number'
console.log(typeof -undefined) //=> 'number'
console.log(typeof -{}) //=> 'number'
console.log(typeof -[]) //=> 'number'
console.log(typeof -function() {}) //=> 'number'
console.log(typeof -'foo') //=> 'number'
console.log(typeof -new Date()) //=> 'number'
console.log(typeof -new Buffer('')) //=> 'number'
console.log(typeof -new Array('')) //=> 'number'
console.log(typeof -NaN) //=> 'number'
console.log(typeof -Infinity) //=> 'number'


// console.log(+true) //=> '1'
// console.log(+false) //=> '0'
// console.log(+null) //=> '0'
// console.log(+undefined) //=> 'NaN'
// console.log(+{}) //=> 'NaN'
// console.log(+[]) //=> '0'
// console.log(+function() {}) //=> 'NaN'
// console.log(+'foo') //=> 'NaN'
// console.log(+new Date()) //=> '1422091853924'
// console.log(+new Buffer('')) //=> '0'
// console.log(+new Array('')) //=> '0'
// console.log(+NaN) //=> 'NaN'
// console.log(+Infinity) //=> 'Infinity'



console.log()

console.log(!!(+true));
console.log(!!(+false));
console.log(!!(+null));
console.log(!!(+undefined));
console.log(!!(+{}));
console.log(!!(+[]));
console.log(!!(+function() {}));
console.log(!!(+'foo'));
console.log(!!(+new Date()));
console.log(!!(+new Buffer('')));
console.log(!!(+new Array('')));
console.log(!!(+NaN));
console.log(!!(+Infinity));
console.log()
console.log(!!(true));
console.log(!!(false));
console.log(!!(null));
console.log(!!(undefined));
console.log(!!({}));
console.log(!!([]));
console.log(!!(function() {}));
console.log(!!('foo'));
console.log(!!(new Date()));
console.log(!!(new Buffer('')));
console.log(!!(new Array('')));
console.log(!!(NaN));
console.log(!!(Infinity));
