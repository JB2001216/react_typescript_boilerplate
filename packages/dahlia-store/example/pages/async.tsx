import React from 'react'

import { createStore, observe } from '../src'

import 'antd/dist/antd.css'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const store = createStore({
  todos: [] as Todo[],
  async fetchTodos() {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
    store.todos = todos
    // store.todos = store.todos
    console.log('11111111111')
    return todos
  },
})

export default observe(() => {
  const loadTodos = async () => {
    const todos = await store.fetchTodos()
    console.log('loaded todos:', todos)
    console.log('333333')
  }
  React.useEffect(() => {
    loadTodos()
  }, [])
  console.log('render.......')
  return (
    <div>
      <span>
        {store.todos.map(todo => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.completed}</span>p
          </div>
        ))}
      </span>
      <button onClick={store.fetchTodos}>Fetch Todos</button>
    </div>
  )
})
