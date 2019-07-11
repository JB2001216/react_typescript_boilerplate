import React from 'react'

import { observe } from 'dahlia/store'
import counterStore from '@stores/CounterStore'

const Counter = observe(() => {
  const {
    count,
    increment,
    decrement,
    asyncIncrement,
    asyncDecrement,
  } = counterStore
  return (
    <div className="box">
      <div style={{ textAlign: 'center' }}>
        <div>{count}</div>
        <button onClick={decrement}>-</button>
        <button onClick={() => increment(1)}>+</button>
        <br />
        <button onClick={asyncDecrement}>async-</button>
        <button onClick={asyncIncrement}>async+</button>
      </div>
    </div>
  )
})

export default Counter
