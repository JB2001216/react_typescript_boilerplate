---
id: ts
title: 使用 TypeScript
sidebar_label: 使用 TypeScript
---

```jsx
import React from 'react'
import { createStore, observe } from 'dahlia/store'

interface Store {
  count: number
  name?: string
  increment: () => void
  asyncIncrement: () => Promise<void>
}

const store = createStore<Store>({
  count: 10,
  increment() {
    store.count++
  },
  async asyncIncrement() {
    store.count++
  },
})

export default observe(() => (
  <div>
    <span>{store.count}</span>
    <button onClick={store.increment}>+</button>
  </div>
))

```