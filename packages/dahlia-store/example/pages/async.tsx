import React from 'react'
import { Table } from 'antd'

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
    await new Promise(resolve => setTimeout(resolve, 1000))
    const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
    store.todos = todos
  },
})

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
]

export default observe(() => {
  React.useEffect(() => {
    store.fetchTodos()
  }, [])
  console.log('store.todos:', store.todos)
  console.log('store.todos.len:', store.todos.length)
  return (
    <div>
      <Table dataSource={store.todos} columns={columns} />
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
  )
})
