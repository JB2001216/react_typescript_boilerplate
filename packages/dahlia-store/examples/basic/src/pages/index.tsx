import React from 'react'
import { createStore } from 'dahlia/store'

const { useStore, dispatch } = createStore({
  state: {
    count: 10,
  },
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
  effects: {
    async asyncIncrement() {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      dispatch(A => A.increment)
    },
  },
})

export default () => {
  const count = useStore(S => S.count)
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(A => A.decrement)}>-</button>
      <button onClick={() => dispatch(A => A.increment)}>+</button>
      <button onClick={() => dispatch(A => A.asyncIncrement)}>async+</button>
    </div>
  )
}
