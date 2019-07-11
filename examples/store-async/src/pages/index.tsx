import React from 'react'
import { createStore, Observer } from 'dahlia-store'

const todoStore = createStore({
  todoItem: {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  async fetchTodo(id: number) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const data = await fetch(url).then(response => response.json())
    todoStore.todoItem = data
  },
})

export default () => (
  <div>
    <Observer>
      {() => <pre>{JSON.stringify(todoStore.todoItem, null, 2)}</pre>}
    </Observer>
    <button onClick={() => todoStore.fetchTodo(2)}>GET_TODO</button>
  </div>
)
