import React from 'react'

import { createStore, observe } from '../src'

const store = createStore({
  count: 10,
  increment() {
    store.count++
  },
})

export default observe(() => (
  <div>
    <span>{store.count}</span>
    <button onClick={store.increment}>+</button>
  </div>
))
