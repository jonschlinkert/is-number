const { Suite } = require('benchmark');
const cursor = require('ansi')(process.stdout);
const fixtures = require('./fixtures');
const next = require('..')

const cycle = (e, nl) => {
  cursor.eraseLine();
  cursor.horizontalAbsolute();
  cursor.write('' + e.target);
  if (nl) cursor.write('\n');
};

function bench(name) {
  const suite = new Suite()
    .on('start', () => console.log(`# ${name}`))
    .on('complete', function(e) {
      const fastest = this.filter('fastest').map('name').toString();
      console.log(`fastest is '${fastest}'`);
      console.log();
    })

  const res = {
    run: suite.run.bind(suite),
    add(key, fn) {
      suite.add(key, {
        onCycle: e => cycle(e),
        onComplete: e => cycle(e, true),
        fn
      });
      return res;
    }
  };
  return res;
}

function run(fn, prop = 'all') {
  [].concat(fixtures[prop]).forEach(val => fn(val));
}

const versions = {
  '7.0.0': function(num) {
    if (typeof num === 'number') {
      return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
      return finite(+num);
    }
    return false;
  },
  next,
  isNumberParseFloat: function(num) {
    if (typeof num === 'number') {
      return num - num === 0;
    }
    if (typeof num === 'string') {
      return (num - parseFloat(num)) > -1;
    }
    return false;
  }
}

function benchIt(name, fixture = 'all') {
  const test = bench(name)
  Object.entries(versions).forEach(
    ([ name, fn ]) => test.add(name, () => run(fn, name, fixture))
  )
  test.run()
}

benchIt('all')
benchIt('string', 'string')
benchIt('number', 'number')
