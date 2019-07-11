import React from 'react'

import { createStore, observe } from 'dahlia/store'

const counterStore = createStore({
  count: 10,
  increment() {
    console.log('...')
    counterStore.count++
  },
  decrement() {
    counterStore.count--
  },
  async asyncIncrement() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    counterStore.count++
  },
})

export default observe(() => (
  <div>
    <span>{counterStore.count}</span>
    <button onClick={counterStore.decrement}>-</button>
    <button onClick={counterStore.increment}>+</button>
    <button onClick={counterStore.asyncIncrement}>async+</button>
  </div>
))
