---
id: started
title: 基本使用
sidebar_label: 基本使用
---

dahlia-store 核心 API 只有两个: createStore 和 observe， 从`dahlia/store`中引入，最简单用法：

```jsx
import React from 'react'
import { createStore, observe } from 'dahlia/store'

const store = createStore({
  count: 10,
  increment() {
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

记住 3 个使用规则:

- 使用`createStore` 创建一个 store，store 包含了 state 和 action (store 最顶层的函数才是 action)
- 使用 observe 包装组件，这样如果 state 更新，组件回自动重新渲染
- 只能在 action 中修改 state，直接修改会报错

## createStore

使用 `createStore` 创建一个 Store:

```js
const store = createStore({
  // state
  count: 10,

  // action: increment
  increment() {
    store.count++
  },
})
```

注意最顶层函数才是 action，下面的函数比不是 action (会报错):

```js
const store = createStore({
  count: 10,
  nested: {
    increment() {
      store.count++
    },
  },
})
```

只能在 action 内修改 state ：

```js
store.count = store.count + 1 // 不在 action 内，会报错

store.increment() // 在 action内，可以更新 state
```

## observe
