const test = require('tape');
const {
  log,
  info,
  dir,
  error,
  warn,
  debug,
} = require('..');

test('test aliases', t => {
  t.plan(2);

  t.strictEqual(log, info);
  t.strictEqual(error, warn);
});

test('test log()', t => {
  t.plan(1);

  log(123);
  log({x: 1});

  t.pass();
});

test('test dir()', t => {
  t.plan(1);

  dir(123);
  dir({x: 1});

  t.pass();
});

test('test debug()', t => {
  t.plan(1);

  debug(123);
  debug({x: 1});

  t.pass();
});
