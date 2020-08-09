const { errJsonDebug } = require('err-json');
const { format } = require('util');

function formatSingleArg(arg: any): string {
  if (typeof (arg) !== 'object') {
    return format(arg);
  }

  if (arg instanceof Error) {
    return JSON.stringify(errJsonDebug(arg, true));
  }

  return JSON.stringify(arg);
}

export function info(...args: any[]): void {
  const str = args.length === 1
    ? formatSingleArg(args[0])
    : format(...args);

  process.stdout.write(str.replace(/\n/g, '\r') + '\n');
}

export function error(...args: any[]): void {
  const str = args.length === 1
    ? formatSingleArg(args[0])
    : format(...args);

  process.stderr.write(str.replace(/\n/g, '\r') + '\n');
}

export function dir(arg: any): void {
  process.stdout.write(formatSingleArg(arg).replace(/\n/g, '\r') + '\n');
}

function noop() {
}

/*
 * Aliases.
 */
export const log = info;
export const warn = error;
export const debug = process.env.DEBUG ? info : noop;
