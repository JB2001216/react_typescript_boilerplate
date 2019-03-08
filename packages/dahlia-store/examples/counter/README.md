## Stamen recommended usage

This is an typescript react example.

No need Provider, Connect , Inject... Just consume or mutate(action).

```bash
git clone https://github.com/forsigner/stamen
cd stamen/recommended-usage
yarn
yarn start
```

then check `http://localhost:3000`

### Recommended way to organize stores files

```sh
.
├── components
│   ├── App.tsx
│   ├── Counter.tsx
│   ├── Posts.tsx
│   └── Profile.tsx
├── index.tsx
└── stores # multiple store and keep per store small
    ├── counterStore.ts
    ├── postStore.ts
    └── profileStore.ts
```

### Recommended way to struct your store

```js
import { createStore } from 'stamen'

const { consume, mutate } = createStore({ count: 1 })

const actions = {
  increment() {
    mutate(state => state.count++)
  },
  decrement() {
    mutate(state => state.count--)
  },
  asyncIncrement() {
    setTimeout(() => {
      mutate(state => {
        state.count++
      })
    }, 1000)
  },
  async asyncDecrement() {
    await new Promise((resolve, _) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
    mutate(state => state.count--)
  },
}

export { consume, mutate, actions }
```

### Use in Component

```js
import * as React from 'react'
import { consume, actions } from '@stores/counterStore'

const Counter = () => (
  <div>
    <div>{consume(state => state.count)}</div>
    <button onClick={actions.decrement}>-</button>
    <button onClick={actions.increment}>+</button>
  </div>
)

export default Counter
```

**tips:**

Config `path` option in tsconfig.json, or `alias` in webpack, so you can import store like this in any where:



```js
import { consume, actions } from '@stores/counterStore'
```

```json
{
  "compilerOptions": {
    "paths": {
      "@stores/*": ["src/stores/*"],
    }
  }
}
```

