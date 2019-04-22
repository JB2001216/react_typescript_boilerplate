import React from 'react'

import { createStore, observe } from '../src'

const store = createStore({
  numbers: [1, 2, 3, 4],
  get len() {
    console.log('store:', store)
    // return store.numbers.length
    return 3
  },
})

export default observe(() => (
  <div>
    <span>Length: {store.len}</span>
  </div>
))
