# lambda-console

Lambda 用の Console 出力。

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
} = require('lambda-console');

// これは console.log と等価。
log('foo %s', 'bar');

// 引数が１つで Object の場合は JSON で出力。
log({ foo: 'bar' });
```

## License

MIT
