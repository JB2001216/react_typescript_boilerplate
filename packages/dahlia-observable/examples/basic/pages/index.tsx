import React from 'react'
import { observe, observable } from '../src'

const store = observable({
  count: 10,
  increment() {
    store.count++
  },
  decrement() {
    store.count--
  },
  async asyncIncrement() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    store.count++
  },
})

observe(() => {
  console.log(store.count)
})

store.increment()
store.asyncIncrement()

export default () => <div>hi dahlia</div>
