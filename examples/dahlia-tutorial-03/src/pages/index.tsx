import React from 'react'
import { useStore, dispatch } from '../stores/counterStore'

export default () => {
  const count = useStore(S => S.count)
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => dispatch(A => A.asyncDecrement)}>async-</button>
      <button onClick={() => dispatch(A => A.decrement)}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(A => A.increment)}>+</button>
      <button onClick={() => dispatch(A => A.asyncIncrement)}>async+</button>
    </div>
  )
}
