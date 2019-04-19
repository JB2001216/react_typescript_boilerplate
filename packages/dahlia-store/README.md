# dahlia-store

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
