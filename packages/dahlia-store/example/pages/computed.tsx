import React from 'react'

import { createStore, observe } from '../src'

const store = createStore({
  numbers: [1, 2, 3, 4],
  get len() {
    return store.numbers.length
  },
})

export default observe(() => (
  <div>
    <span>Length: {store.len}</span>
  </div>
))
