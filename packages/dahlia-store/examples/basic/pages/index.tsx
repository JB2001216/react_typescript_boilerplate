import React from 'react'
import { createStore, Observer } from '../src'

const counterStore = createStore({
  count: 10,
  increment() {
    console.log('...');
    counterStore.count++
  },
  decrement() {
    counterStore.count--
  },
  async asyncIncrement() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
    counterStore.count++
  },
})

export default () => (
  <div>
    <Observer>{() => <span>{counterStore.count}</span>}</Observer>
    <button onClick={counterStore.decrement}>-</button>
    <button onClick={counterStore.increment}>+</button>
    <button onClick={counterStore.asyncIncrement}>async+</button>
  </div>
)
