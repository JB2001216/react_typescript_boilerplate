# dahlia-observable

## Installation

```sh
yarn add dahlia-observable
```

## Quick Start

```js
import { observable, observe } from 'dahlia-observable'

const store = observable({
  count: 1,
  increment() {
    store.count++
  },
})

observe(() => {
  console.log(store.count)
})

store.increment() // 2
store.increment() // 3
```

## License

[MIT License](https://github.com/forsigner/dahlia/blob/master/LICENSE)
