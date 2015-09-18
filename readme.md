# observ-reset [![Build Status](https://travis-ci.org/bendrucker/observ-reset.svg?branch=master)](https://travis-ci.org/bendrucker/observ-reset)

> Reset an observable


## Install

```
$ npm install --save observ-reset
```


## Usage

```js
var Observ = require('observ')
var reset = require('observ-reset')
var name = Observ('Ben')

reset(name)
name()
//=> null
```

## API

#### `reset(observable, [Constructor])` -> `undefined`

##### observable

*Required*  
Type: `function`

An [observable](https://github.com/raynos/observ).

##### Constructor

Type: `function`

An optional constructor to use that returns a new observable state.

## License

MIT © [Ben Drucker](http://bendrucker.me)
