import React from 'react'

import { createStore, Observer, observe } from '../src'

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
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
    counterStore.count++
  },
})

class A extends React.Component<{ p: string }> {
  render() {
    return (
      <div>
        <Observer>{<span>{counterStore.count}</span>}</Observer>
        <button onClick={counterStore.decrement}>-</button>
        <button onClick={counterStore.increment}>+</button>
        <button onClick={counterStore.asyncIncrement}>async+</button>
      </div>
    )
  }
}

const App = observe(A)

// const App = observe<{ p: string }>(() => {
//   return (
//     <div>
//       <Observer>{() => <span>{counterStore.count}</span>}</Observer>
//       <button onClick={counterStore.decrement}>-</button>
//       <button onClick={counterStore.increment}>+</button>
//       <button onClick={counterStore.asyncIncrement}>async+</button>
//     </div>
//   )
// })

export default () => (
  <div>
    <App p={'qwerty'} />
  </div>
)
