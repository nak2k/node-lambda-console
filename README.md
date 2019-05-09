# lambda-console

Console for Lambda.

## Installation

```
npm i lambda-console
```

## Usage

``` javascript
const {
  log,
  info,
  dir,
  error,
  warn,
  debug,
} = require('lambda-console');

// This is equivalent to console.log.
log('foo %s', 'bar');

// If there is one argument and it is an object, it is outputted as JSON.
log({ foo: 'bar' });
```

## License

MIT
