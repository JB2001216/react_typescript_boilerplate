import React from 'react'
import { observe, observable, raw } from '../src'

const store = observable({
  count: 10,
  about: {
    name: 'couter',
    init: 10,
  },
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
console.log(store);
console.log(store.about);
console.log(raw(store));
console.log(raw(store.about));

export default () => <div>hi dahlia</div>
