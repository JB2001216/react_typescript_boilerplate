---
id: basic
title: 简介
sidebar_label: 简介
---

异步数据管理一直是一个难点，在 React 的生态圈中，很多人把异步数据使用状态管理维护，比如使用 Redux，用异步 Action 获取远程数据。Dahlia 不推崇使用状态管理维护异步数据，Dahlia 推荐在组件内直接获取异步数据，使用 hooks，简化数据的获取和管理。

下面我们看看和使用 Redux 有什么本质上的区别。

假设我们要实现一个功能，获取一个 TodoList 数据，并且用 UI 渲染。

TodoList 数据源：https://jsonplaceholder.typicode.com/todos 。

## 使用 `dahlia/rest`

我们使用 `dahlia/rest` 的 `useFetch` 获取数据，可以轻松的拿到数据的状态 `{ loading, data, error }`，然后渲染处理：

```jsx
import React from 'react'
import { useFetch } from 'dahlia/rest'

const Todos = () => {
  const { loading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos',
  )

  if (loading) return <span>loading...</span>
  if (error) return <span>error!</span>

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
export defulat Todos
```

如果你是 graphql 用户，类似的，可以使用 `dahlia/graphql` 的 `useQuery`。

## 使用 Redux

使用 Redux 管理异步数据，假设我们已经使用了 Redux 中间件 `redux-thunk`，我们会有下面类似的代码:

首先，我们会把字符串定义定义为常量到一个 `constant.js`

```js
export const LOADING_TODOS = 'LOADING_TODOS'
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS'
export const LOAD_TODOS_ERROR = 'LOAD_TODOS_ERROR'
```

然后，编写异步的 action, `actions.js`:

```js
import {
  LOADING_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
} from '../constant'

export function fetchTodos() {
  return dispatch => {
    dispatch({ type: LOADING_TODOS })
    return fetch('https://jsonplaceholder.typicode.com/todo')
      .then(response => response.json())
      .then(todos => {
        dispatch({
          type: LOAD_TODOS_SUCCESS,
          todos,
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_TODOS_ERROR,
          error,
        })
      })
  }
}
```

接着，在 reducer 中处理数据，`reducer.js`

```js
import {
  LOADING_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
} from '../constant'

const initialState = {
  todos: {
    loading: false,
    data: [],
    error: null,
  },
}

export default function(state = initalState, action) {
  switch (action.type) {
    case LOADING_TODOS:
      const { todos } = state
      return { ...state, todos: { ...todos, loading: true } }
    case LOAD_TODOS_SUCCESS:
      const { todos } = state
      return { ...state, todos: { ...todos, data: action.todos } }
    case LOAD_TODOS_ERROR:
      const { todos } = state
      return { ...state, todos: { ...todos, error: action.error } }
    default:
      return state
  }
}
```

还没完，最后，在组件中使用:

```jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'

class Todos extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTodos)
  }

  render() {
    const { loading, items, error } = this.props
    if (loading) return <span>loading...</span>
    if (error) return <span>error!</span>

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const { todos } = state
  return {
    loading: todos.loaing,
    items: todos.data,
    error: todos.error,
  }
}

export default connect(mapStateToProps)(Todos)
```

我们可以发现，使用 Redux 管理异步数据，代码量激增，是 `dahlia/rest` 5 倍以上的代码量，不管开发效率还是开发体验，亦或是可以维护性和可读性，个人认为，类似的 redux 这样的解决方案并不优秀。Dahlia 版本简单直观，Redux 本地冗长，并且链路太长，需维护多个文件，更多的代码量。
