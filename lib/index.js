const { errJsonDebug } = require('err-json');
const { format } = require('util');

function formatSingleArg(arg) {
  if (typeof(arg) !== 'object') {
    return arg;
  }

  if (arg instanceof Error) {
    return JSON.stringify(errJsonDebug(arg, true));
  }

  return JSON.stringify(arg);
}

function info(...args) {
  const str = args.length === 1
    ? formatSingleArg(args[0])
    : format(...args);

  process.stdout.write(str + '\n');
}

function error(...args) {
  const str = args.length === 1
    ? formatSingleArg(args[0])
    : format(...args);

  process.stderr.write(str + '\n');
}

function dir(arg) {
  process.stdout.write(formatSingleArg(arg) + '\n');
}

function noop() {
}

/*
 * Exports.
 */
exports.log = exports.info = info;
exports.dir = dir;
exports.error = exports.warn = error;
exports.debug = process.env.DEBUG ? info : noop;
