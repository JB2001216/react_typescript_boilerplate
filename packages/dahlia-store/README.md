# dahlia-store

[![npm](https://img.shields.io/npm/v/dahlia.svg)](https://www.npmjs.com/package/dahlia) [![Build Status](https://travis-ci.org/forsigner/dahlia.svg?branch=master)](https://travis-ci.org/forsigner/dahlia) [](https://coveralls.io/github/forsigner/dahlia?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/dahlia.svg)](https://github.com/forsigner/dahlia/blob/master/LICENSE)

> State management for Dahlia

## Installation

```sh
yarn add dahlia-store
```

## Quick Start

```js
import React from 'react'

import { createStore, Observer } from 'dahlia-store'

const store = createStore({
  count: 1,
  increment() {
    store.count++
  },
  decrement() {
    store.count--
  },
  async asyncIncrement() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    store.count++
  },
})

const App = () => (
  <div>
    <Observer>{() => <span>{store.count}</span>}</Observer>
    <button onClick={store.decrement}>-</button>
    <button onClick={store.increment}>+</button>
    <button onClick={store.asyncIncrement}>async+</button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
