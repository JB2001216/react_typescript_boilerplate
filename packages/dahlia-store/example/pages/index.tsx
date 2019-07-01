import React from 'react'

import { createStore, observe } from '../src'

const store = createStore({
  count: 10,
  num: 1,

  async increment() {
    store.count++
    await new Promise(resolve => setTimeout(resolve, 2000))
    store.count++
    store.count++
    store.count++
    store.count++
    store.count++
    store.count++
    store.count++
    store.count++
    store.count++
    store.count++
    store.num++
    return store.count
  },
  // *setNum() {
  //   console.log('xxx-------')
  //   store.count++

  //   const r = yield new Promise(resolve =>
  //     setTimeout(() => {
  //       resolve(1)
  //     }, 2000),
  //   )
  //   console.log('r:', r)
  //   store.count++
  //   store.num++
  // },
})

const timer = createStore({
  now: Date.now(),
  setTime() {
    timer.now = Date.now()
  },
})

export default observe(() => {
  const action = async () => {
    // timer.setTime()
    // store.setNum()
    await store.increment()
  }

  console.log('render.....')
  return (
    <div>
      <span>{store.count}</span>
      <span>{store.num}</span>
      {/* <span>{timer.now}</span> */}
      <button onClick={action}>+</button>
    </div>
  )
})
