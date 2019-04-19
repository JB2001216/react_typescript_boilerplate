import React from 'react'

import { createStore, observe } from '../src'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const store = createStore({
  todos: [] as Todo[],
  async fetchTodos() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
    store.todos = todos
  },
})

export default observe(() => (
  <div>
    <span>
      {store.todos.map(todo => (
        <div>
          <span>{todo.title}</span>
          <span>{todo.completed}</span>p
        </div>
      ))}
    </span>
    <button onClick={store.fetchTodos}>Fetch Todos</button>
  </div>
))
